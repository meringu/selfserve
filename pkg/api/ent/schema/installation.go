package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Installation holds the schema definition for the Installation entity.
type Installation struct {
	ent.Schema
}

// Fields of the Installation.
func (Installation) Fields() []ent.Field {
	return []ent.Field{
		field.Time("created_at").
			Immutable().
			Default(time.Now).
            Annotations(
                entgql.OrderField("CREATED_AT"),
            ),
	}
}

// Edges of the Installation.
func (Installation) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("moduleVersion", ModuleVersion.Type).
			Ref("installations").
			Unique(),
	}
}
