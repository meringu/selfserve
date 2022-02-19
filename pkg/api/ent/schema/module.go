package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// Module holds the schema definition for the Module entity.
type Module struct {
	ent.Schema
}

// Fields of the Module.
func (Module) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").
			Unique().
			Annotations(
				entgql.OrderField("NAME"),
			),
		field.String("description"),
		field.Time("created_at").
			Immutable().
			Default(time.Now).
            Annotations(
                entgql.OrderField("CREATED_AT"),
            ),
	}
}

// Edges of the Module.
func (Module) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("namespace", Namespace.Type).
			Ref("modules").
			Unique(),
		edge.To("versions", ModuleVersion.Type),
	}
}

// Indexes of the Module
func (Module) Indexes() []ent.Index {
    return []ent.Index{
        index.Fields("name"),
    }
}
