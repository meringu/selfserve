// Code generated by entc, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/meringu/selfserve/pkg/api/ent/module"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
)

// ModuleVersion is the model entity for the ModuleVersion schema.
type ModuleVersion struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the ModuleVersionQuery when eager-loading is set.
	Edges           ModuleVersionEdges `json:"edges"`
	module_versions *int
}

// ModuleVersionEdges holds the relations/edges for other nodes in the graph.
type ModuleVersionEdges struct {
	// Module holds the value of the module edge.
	Module *Module `json:"module,omitempty"`
	// Installations holds the value of the installations edge.
	Installations []*Installation `json:"installations,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// ModuleOrErr returns the Module value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e ModuleVersionEdges) ModuleOrErr() (*Module, error) {
	if e.loadedTypes[0] {
		if e.Module == nil {
			// The edge module was loaded in eager-loading,
			// but was not found.
			return nil, &NotFoundError{label: module.Label}
		}
		return e.Module, nil
	}
	return nil, &NotLoadedError{edge: "module"}
}

// InstallationsOrErr returns the Installations value or an error if the edge
// was not loaded in eager-loading.
func (e ModuleVersionEdges) InstallationsOrErr() ([]*Installation, error) {
	if e.loadedTypes[1] {
		return e.Installations, nil
	}
	return nil, &NotLoadedError{edge: "installations"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*ModuleVersion) scanValues(columns []string) ([]interface{}, error) {
	values := make([]interface{}, len(columns))
	for i := range columns {
		switch columns[i] {
		case moduleversion.FieldID:
			values[i] = new(sql.NullInt64)
		case moduleversion.FieldCreatedAt:
			values[i] = new(sql.NullTime)
		case moduleversion.ForeignKeys[0]: // module_versions
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type ModuleVersion", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the ModuleVersion fields.
func (mv *ModuleVersion) assignValues(columns []string, values []interface{}) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case moduleversion.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			mv.ID = int(value.Int64)
		case moduleversion.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				mv.CreatedAt = value.Time
			}
		case moduleversion.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field module_versions", value)
			} else if value.Valid {
				mv.module_versions = new(int)
				*mv.module_versions = int(value.Int64)
			}
		}
	}
	return nil
}

// QueryModule queries the "module" edge of the ModuleVersion entity.
func (mv *ModuleVersion) QueryModule() *ModuleQuery {
	return (&ModuleVersionClient{config: mv.config}).QueryModule(mv)
}

// QueryInstallations queries the "installations" edge of the ModuleVersion entity.
func (mv *ModuleVersion) QueryInstallations() *InstallationQuery {
	return (&ModuleVersionClient{config: mv.config}).QueryInstallations(mv)
}

// Update returns a builder for updating this ModuleVersion.
// Note that you need to call ModuleVersion.Unwrap() before calling this method if this ModuleVersion
// was returned from a transaction, and the transaction was committed or rolled back.
func (mv *ModuleVersion) Update() *ModuleVersionUpdateOne {
	return (&ModuleVersionClient{config: mv.config}).UpdateOne(mv)
}

// Unwrap unwraps the ModuleVersion entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (mv *ModuleVersion) Unwrap() *ModuleVersion {
	tx, ok := mv.config.driver.(*txDriver)
	if !ok {
		panic("ent: ModuleVersion is not a transactional entity")
	}
	mv.config.driver = tx.drv
	return mv
}

// String implements the fmt.Stringer.
func (mv *ModuleVersion) String() string {
	var builder strings.Builder
	builder.WriteString("ModuleVersion(")
	builder.WriteString(fmt.Sprintf("id=%v", mv.ID))
	builder.WriteString(", created_at=")
	builder.WriteString(mv.CreatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// ModuleVersions is a parsable slice of ModuleVersion.
type ModuleVersions []*ModuleVersion

func (mv ModuleVersions) config(cfg config) {
	for _i := range mv {
		mv[_i].config = cfg
	}
}
