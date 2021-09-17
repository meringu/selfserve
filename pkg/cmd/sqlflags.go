package cmd

import (
	"database/sql"
	"fmt"
	"strings"
	"time"

	esql "entgo.io/ent/dialect/sql"
	"github.com/spf13/pflag"
)

var (
	SQLDriver             string
	SQLDataSourceName     string
	SQLMaxIdleConnections int
	SQLMaxOpenConnections int
	SQLConnMaxLifetime    int
)

func CreateSQLDriver() (*esql.Driver, error) {
	drv, err := esql.Open(SQLDriver, SQLDataSourceName)
	if err != nil {
		return nil, err
	}

	db := drv.DB()
	db.SetMaxIdleConns(SQLMaxIdleConnections)
	db.SetMaxOpenConns(SQLMaxOpenConnections)
	db.SetConnMaxLifetime(time.Second * time.Duration(SQLConnMaxLifetime))

	return drv, nil
}

func registerSQLFlags(flags *pflag.FlagSet) {
	flags.IntVar(&SQLMaxIdleConnections, "sql-max-idle-connections", EnvironIntOr("SELFSERVE_SQL_MAX_IDLE_CONNECTIONS", 10), "SQL maximum idle connections")
	flags.IntVar(&SQLMaxOpenConnections, "sql-max-open-connections", EnvironIntOr("SELFSERVE_SQL_MAX_OPEN_CONNECTIONS", 10), "SQL maximum open connections")
	flags.IntVar(&SQLConnMaxLifetime, "sql-conn-max-lifetime-seconds", EnvironIntOr("SELFSERVE_SQL_CONN_MAX_LIFETIME_SECONDS", 3600), "SQL connection maximum lifetime")
	flags.StringVar(&SQLDriver, "sql-driver", EnvironOr("SELFSERVE_SQL_DRIVER", "postgres"), fmt.Sprintf("SQL driver. One of: %s", strings.Join(sql.Drivers(), ", ")))
	flags.StringVar(&SQLDataSourceName, "sql-data-source-name", EnvironOr("SELFSERVE_SQL_DATA_SOURCE_NAME", "host=localhost port=5432 user=postgres password=postgres dbname=postgres sslmode=disable"), "SQL data source name")
}
