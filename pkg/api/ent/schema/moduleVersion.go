package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// ModuleVersion holds the schema definition for the ModuleVersion entity.
type ModuleVersion struct {
	ent.Schema
}

// Fields of the ModuleVersion.
func (ModuleVersion) Fields() []ent.Field {
	return []ent.Field{
		field.String("version"),
		field.String("source"),
		field.Time("created_at").
			Default(time.Now),
	}
}

// Edges of the ModuleVersion.
func (ModuleVersion) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("module", Module.Type).
			Ref("versions").
			Unique(),
	}
}

// Indexes of the ModuleVersion.
func (ModuleVersion) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("version").
			Edges("module").
			Unique(),
	}
}
