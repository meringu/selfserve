package cmd

import (
	"fmt"
	"os"

	"github.com/go-logr/logr"
	"github.com/go-logr/zapr"
	"github.com/spf13/cobra"
	"go.uber.org/zap"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
	_ "github.com/mattn/go-sqlite3"
)

var rootCmd = &cobra.Command{
	Use:   "selfserve",
	Short: "SelfServe",
}

var log logr.Logger
var flushLog func() error

func init() {
	zapLog, err := zap.NewProduction()
	if err != nil {
		panic(fmt.Sprintf("failed to init logger: %v", err))
	}
	log = zapr.NewLogger(zapLog)
	flushLog = zapLog.Sync
}

// Subcommands can set the exit code here.
var exitCode = 0

// Execute runs SelfServe
func Execute() {
	defer flushLog()

	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	os.Exit(exitCode)
}
