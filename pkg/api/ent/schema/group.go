package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// Group holds the schema definition for the Group entity.
type Group struct {
	ent.Schema
}

// Fields of the Group.
func (Group) Fields() []ent.Field {
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

// Edges of the Group.
func (Group) Edges() []ent.Edge {
	return []ent.Edge{
        edge.To("users", User.Type),
		edge.To("children", Group.Type).
			From("parent").
			Unique(),
		edge.From("namespaces", Namespace.Type).
			Ref("groups"),	
    }
}

// Indexes of the Group
func (Group) Indexes() []ent.Index {
    return []ent.Index{
        index.Fields("name"),
    }
}
