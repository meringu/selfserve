package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// Namespace holds the schema definition for the Namespace entity.
type Namespace struct {
	ent.Schema
}

// Fields of the Namespace.
func (Namespace) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").
			Unique().
			Annotations(
				entgql.OrderField("NAME"),
			),
		field.Time("created_at").
			Immutable().
			Default(time.Now).
            Annotations(
                entgql.OrderField("CREATED_AT"),
            ),
	}
}

// Edges of the Namespace.
func (Namespace) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("groups", Group.Type),
		edge.To("users", User.Type),
		edge.To("modules", Module.Type),
        edge.To("installations", Installation.Type),
    }
}

// Indexes of the Namespace
func (Namespace) Indexes() []ent.Index {
    return []ent.Index{
        index.Fields("name"),
    }
}
