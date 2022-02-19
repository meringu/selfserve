package cmd

import (
	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/ent/migrate"
	"github.com/spf13/cobra"
)

func init() {
	flags := migrateCmd.Flags()
	registerSQLFlags(flags)
	rootCmd.AddCommand(migrateCmd)
}

var migrateCmd = &cobra.Command{
	Use:   "migrate",
	Short: "Migrate",
	Run: func(cmd *cobra.Command, args []string) {
		log := log.WithName("migrate")

		log.Info("starting schema migration")

		drv, err := CreateSQLDriver()
		if err != nil {
			log.Error(err, "failed to init db client")
			exitCode = 1
			return
		}

		db := ent.NewClient(ent.Driver(drv))
		defer db.Close()

		// _, err = drv.DB().Exec("CREATE EXTENSION semver;")
		// if err != nil {
		// 	log.Error(err, "failed to create semver extension")
		// 	exitCode = 1
		// 	return
		// }

		err = db.Schema.Create(cmd.Context(), migrate.WithGlobalUniqueID(true))
		if err != nil {
			log.Error(err, "failed to migrate schema")
			exitCode = 1
			return
		}

		log.Info("finished schema migration")

		// mod, err := db.Module.Create().SetName("test2").SetDescription("test2 module").Save(cmd.Context())
		// if err != nil {
		// 	panic(err)
		// }

		// _, err = db.ModuleVersion.Create().SetVersion("1.0.0").SetSource("abc").SetModule(mod).Save(cmd.Context())
		// if err != nil {
		// 	panic(err)
		// }
		// _, err = db.ModuleVersion.Create().SetVersion("2.0.0").SetSource("abc").SetModule(mod).Save(cmd.Context())
		// if err != nil {
		// 	panic(err)
		// }
	},
}
