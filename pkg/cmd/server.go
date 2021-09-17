package cmd

import (
	"context"
	"errors"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
	"github.com/spf13/cobra"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/graph"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
	"github.com/meringu/selfserve/pkg/api/handlers"
)

var (
	GracefulShutdownTimeoutSeconds int
	HTTPBindAddress                string
	HTTPExternalURL                string
	HTTPStaticAssetsDir            string
)

func init() {
	flags := serverCmd.Flags()

	flags.IntVar(&GracefulShutdownTimeoutSeconds, "graceful-shutdown-timeout-seconds", EnvironIntOr("SELFSERVE_GRACEFUL_SHUTDOWN_TIMEOUT_SECONDS", 15), "Graceful shutdown timeout seconds for stopping the server")
	flags.StringVar(&HTTPBindAddress, "http-bind-address", EnvironOr("SELFSERVE_HTTP_BIND_ADDRESS", ":8080"), "Bind address for server")
	flags.StringVar(&HTTPExternalURL, "http-external-url", EnvironOr("SELFSERVE_HTTP_EXTERNAL_URL", "http://localhost:8080"), "Bind address for server")
	flags.StringVar(&HTTPStaticAssetsDir, "http-static-assets-dir", EnvironOr("SELFSERVE_STATIC_ASSETS_DIR", "dist/"), "Folder of static web assets")
	registerSQLFlags(flags)

	rootCmd.AddCommand(serverCmd)
}

var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "Server",
	Run: func(cmd *cobra.Command, args []string) {
		log := log.WithName("server")

		drv, err := CreateSQLDriver()
		if err != nil {
			log.Error(err, "failed to init db client")
			exitCode = 1
			return
		}
		db := ent.NewClient(ent.Driver(drv))
		defer db.Close()

		router := mux.NewRouter()
		router.Use(handlers.LoggingMiddleware(log.WithName("http")))

		router.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) { w.Write([]byte("PONG")) })
		router.Handle("/query", handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: graph.NewResolver(db)})))
		router.Handle("/graphql", playground.Handler("GraphQL playground", "/query"))
		router.PathPrefix("/").Handler(handlers.StaticHandler(HTTPStaticAssetsDir))

		server := &http.Server{
			Addr:         HTTPBindAddress,
			Handler:      router,
			WriteTimeout: 1800 * time.Second,
			ReadTimeout:  60 * time.Second,
		}

		quit := make(chan os.Signal)

		go func() {
			log.Info("server starting")
			if err := server.ListenAndServe(); err != nil {
				if !errors.Is(err, http.ErrServerClosed) {
					log.Error(err, "listen: %s\n")
				}
			}
			quit <- syscall.SIGINT // If the server exits shut down the main goroutine
		}()

		signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
		<-quit
		log.Info("shutting down server...")

		ctx, cancel := context.WithTimeout(context.Background(), time.Duration(GracefulShutdownTimeoutSeconds)*time.Second)
		defer cancel()

		if err := server.Shutdown(ctx); err != nil {
			log.Error(err, "server forced to shutdown")
			exitCode = 1
		}
	},
}
