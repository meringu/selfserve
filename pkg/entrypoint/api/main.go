package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/go-logr/zapr"
	"github.com/gorilla/mux"
	"go.uber.org/zap"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/graph"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
	"github.com/meringu/selfserve/pkg/api/handlers"
)

func main() {
	os.Exit(run())
}

func run() int {
	zapLog, err := zap.NewProduction()
	if err != nil {
		fmt.Printf("failed to init logger: %w", err)
		return 1
	}
	defer zapLog.Sync()

	log := zapr.NewLogger(zapLog).WithName("server")

	drv, err := sql.Open(os.Getenv("SELFSERVE_SQL_DRIVER"), os.Getenv("SELFSERVE_SQL_SOURCE"))
	if err != nil {
		log.Error(err, "failed to init db client")
		os.Exit(1)
	}

	drv.DB().SetMaxIdleConns(10)
	drv.DB().SetMaxOpenConns(10)
	drv.DB().SetConnMaxLifetime(time.Second * time.Duration(3600))

	db := ent.NewClient(ent.Driver(drv))
	defer db.Close()

	router := mux.NewRouter()
	router.Use(handlers.LoggingMiddleware(log.WithName("http")))

	router.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) { w.Write([]byte("PONG")) })
	router.Handle("/query", handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: graph.NewResolver(db)})))

	server := &http.Server{
		Addr:         ":8080",
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
		quit <- syscall.SIGINT
	}()

	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Info("shutting down server...")

	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(10)*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Error(err, "server forced to shutdown")
		return 1
	}

	return 0
}
