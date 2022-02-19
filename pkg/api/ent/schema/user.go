package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// User holds the schema definition for the User entity.
type User struct {
	ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {
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

// Edges of the User.
func (User) Edges() []ent.Edge {
	return []ent.Edge{
        edge.From("groups", Group.Type).
            Ref("users"),
		edge.From("namespaces", Namespace.Type).
			Ref("users"),
    }
}

// Indexes of the User
func (User) Indexes() []ent.Index {
    return []ent.Index{
        index.Fields("name"),
    }
}
