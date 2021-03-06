// Code generated by entc, DO NOT EDIT.

package group

import (
	"time"
)

const (
	// Label holds the string label denoting the group type in the database.
	Label = "group"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// EdgeUsers holds the string denoting the users edge name in mutations.
	EdgeUsers = "users"
	// EdgeParent holds the string denoting the parent edge name in mutations.
	EdgeParent = "parent"
	// EdgeChildren holds the string denoting the children edge name in mutations.
	EdgeChildren = "children"
	// EdgeNamespaces holds the string denoting the namespaces edge name in mutations.
	EdgeNamespaces = "namespaces"
	// Table holds the table name of the group in the database.
	Table = "groups"
	// UsersTable is the table that holds the users relation/edge. The primary key declared below.
	UsersTable = "group_users"
	// UsersInverseTable is the table name for the User entity.
	// It exists in this package in order to avoid circular dependency with the "user" package.
	UsersInverseTable = "users"
	// ParentTable is the table that holds the parent relation/edge.
	ParentTable = "groups"
	// ParentColumn is the table column denoting the parent relation/edge.
	ParentColumn = "group_children"
	// ChildrenTable is the table that holds the children relation/edge.
	ChildrenTable = "groups"
	// ChildrenColumn is the table column denoting the children relation/edge.
	ChildrenColumn = "group_children"
	// NamespacesTable is the table that holds the namespaces relation/edge. The primary key declared below.
	NamespacesTable = "namespace_groups"
	// NamespacesInverseTable is the table name for the Namespace entity.
	// It exists in this package in order to avoid circular dependency with the "namespace" package.
	NamespacesInverseTable = "namespaces"
)

// Columns holds all SQL columns for group fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldCreatedAt,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "groups"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"group_children",
}

var (
	// UsersPrimaryKey and UsersColumn2 are the table columns denoting the
	// primary key for the users relation (M2M).
	UsersPrimaryKey = []string{"group_id", "user_id"}
	// NamespacesPrimaryKey and NamespacesColumn2 are the table columns denoting the
	// primary key for the namespaces relation (M2M).
	NamespacesPrimaryKey = []string{"namespace_id", "group_id"}
)

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
)
