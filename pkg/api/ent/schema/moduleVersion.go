package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// ModuleVersion holds the schema definition for the ModuleVersion entity.
type ModuleVersion struct {
	ent.Schema
}

// Fields of the ModuleVersion.
func (ModuleVersion) Fields() []ent.Field {
	return []ent.Field{


		// // terraform
		// default - A default value which then makes the variable optional.
		// type - This argument specifies what value types are accepted for the variable.
		//   string
    	//   number
        //   bool
		//   list(<TYPE>)
		//   set(<TYPE>)
		//   map(<TYPE>)
		//   object({<ATTR NAME> = <TYPE>, ... })
		//   tuple([<TYPE>, ...])
		// description - This specifies the input variable's documentation.
		// validation - A block to define validation rules, usually in addition to type constraints.
		// sensitive - Limits Terraform UI output when the variable is used in configuration.

		// // cfn
		// AllowedPattern
		// AllowedValues
		// ConstraintDescription
		// Default
		// Description
		// MaxLength
		// MaxValue
		// MinLength
		// MinValue
		// NoEcho
		// Type
		// 	String
		// 	Number
		// 	List<Number>
		// 	CommaDelimitedList
		// 	SSM

		// // ARM
		// name
		// type
		//   array
		//   bool
		//   int
		//   object
		//   secureObject
		//   secureString
		//   string
		// allowedValues
		// defaultValue
		// minLength
		// maxLength
		// minValue
		// maxValue
		// description

		// field.JSON("variables")
		field.Time("created_at").
			Immutable().
			Default(time.Now).
			Annotations(
				entgql.OrderField("CREATED_AT"),
			),
	}
}

// Edges of the ModuleVersion.
func (ModuleVersion) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("module", Module.Type).
			Ref("versions").
			Unique(),
		edge.To("installations", Installation.Type),
	}
}
