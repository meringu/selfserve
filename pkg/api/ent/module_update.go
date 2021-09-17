// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/meringu/selfserve/pkg/api/ent/module"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
	"github.com/meringu/selfserve/pkg/api/ent/predicate"
)

// ModuleUpdate is the builder for updating Module entities.
type ModuleUpdate struct {
	config
	hooks    []Hook
	mutation *ModuleMutation
}

// Where appends a list predicates to the ModuleUpdate builder.
func (mu *ModuleUpdate) Where(ps ...predicate.Module) *ModuleUpdate {
	mu.mutation.Where(ps...)
	return mu
}

// SetName sets the "name" field.
func (mu *ModuleUpdate) SetName(s string) *ModuleUpdate {
	mu.mutation.SetName(s)
	return mu
}

// SetDescription sets the "description" field.
func (mu *ModuleUpdate) SetDescription(s string) *ModuleUpdate {
	mu.mutation.SetDescription(s)
	return mu
}

// AddVersionIDs adds the "versions" edge to the ModuleVersion entity by IDs.
func (mu *ModuleUpdate) AddVersionIDs(ids ...int) *ModuleUpdate {
	mu.mutation.AddVersionIDs(ids...)
	return mu
}

// AddVersions adds the "versions" edges to the ModuleVersion entity.
func (mu *ModuleUpdate) AddVersions(m ...*ModuleVersion) *ModuleUpdate {
	ids := make([]int, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return mu.AddVersionIDs(ids...)
}

// Mutation returns the ModuleMutation object of the builder.
func (mu *ModuleUpdate) Mutation() *ModuleMutation {
	return mu.mutation
}

// ClearVersions clears all "versions" edges to the ModuleVersion entity.
func (mu *ModuleUpdate) ClearVersions() *ModuleUpdate {
	mu.mutation.ClearVersions()
	return mu
}

// RemoveVersionIDs removes the "versions" edge to ModuleVersion entities by IDs.
func (mu *ModuleUpdate) RemoveVersionIDs(ids ...int) *ModuleUpdate {
	mu.mutation.RemoveVersionIDs(ids...)
	return mu
}

// RemoveVersions removes "versions" edges to ModuleVersion entities.
func (mu *ModuleUpdate) RemoveVersions(m ...*ModuleVersion) *ModuleUpdate {
	ids := make([]int, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return mu.RemoveVersionIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (mu *ModuleUpdate) Save(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(mu.hooks) == 0 {
		affected, err = mu.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ModuleMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			mu.mutation = mutation
			affected, err = mu.sqlSave(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(mu.hooks) - 1; i >= 0; i-- {
			if mu.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = mu.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, mu.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// SaveX is like Save, but panics if an error occurs.
func (mu *ModuleUpdate) SaveX(ctx context.Context) int {
	affected, err := mu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (mu *ModuleUpdate) Exec(ctx context.Context) error {
	_, err := mu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mu *ModuleUpdate) ExecX(ctx context.Context) {
	if err := mu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (mu *ModuleUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   module.Table,
			Columns: module.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: module.FieldID,
			},
		},
	}
	if ps := mu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := mu.mutation.Name(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: module.FieldName,
		})
	}
	if value, ok := mu.mutation.Description(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: module.FieldDescription,
		})
	}
	if mu.mutation.VersionsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := mu.mutation.RemovedVersionsIDs(); len(nodes) > 0 && !mu.mutation.VersionsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := mu.mutation.VersionsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, mu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{module.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return 0, err
	}
	return n, nil
}

// ModuleUpdateOne is the builder for updating a single Module entity.
type ModuleUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *ModuleMutation
}

// SetName sets the "name" field.
func (muo *ModuleUpdateOne) SetName(s string) *ModuleUpdateOne {
	muo.mutation.SetName(s)
	return muo
}

// SetDescription sets the "description" field.
func (muo *ModuleUpdateOne) SetDescription(s string) *ModuleUpdateOne {
	muo.mutation.SetDescription(s)
	return muo
}

// AddVersionIDs adds the "versions" edge to the ModuleVersion entity by IDs.
func (muo *ModuleUpdateOne) AddVersionIDs(ids ...int) *ModuleUpdateOne {
	muo.mutation.AddVersionIDs(ids...)
	return muo
}

// AddVersions adds the "versions" edges to the ModuleVersion entity.
func (muo *ModuleUpdateOne) AddVersions(m ...*ModuleVersion) *ModuleUpdateOne {
	ids := make([]int, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return muo.AddVersionIDs(ids...)
}

// Mutation returns the ModuleMutation object of the builder.
func (muo *ModuleUpdateOne) Mutation() *ModuleMutation {
	return muo.mutation
}

// ClearVersions clears all "versions" edges to the ModuleVersion entity.
func (muo *ModuleUpdateOne) ClearVersions() *ModuleUpdateOne {
	muo.mutation.ClearVersions()
	return muo
}

// RemoveVersionIDs removes the "versions" edge to ModuleVersion entities by IDs.
func (muo *ModuleUpdateOne) RemoveVersionIDs(ids ...int) *ModuleUpdateOne {
	muo.mutation.RemoveVersionIDs(ids...)
	return muo
}

// RemoveVersions removes "versions" edges to ModuleVersion entities.
func (muo *ModuleUpdateOne) RemoveVersions(m ...*ModuleVersion) *ModuleUpdateOne {
	ids := make([]int, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return muo.RemoveVersionIDs(ids...)
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (muo *ModuleUpdateOne) Select(field string, fields ...string) *ModuleUpdateOne {
	muo.fields = append([]string{field}, fields...)
	return muo
}

// Save executes the query and returns the updated Module entity.
func (muo *ModuleUpdateOne) Save(ctx context.Context) (*Module, error) {
	var (
		err  error
		node *Module
	)
	if len(muo.hooks) == 0 {
		node, err = muo.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ModuleMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			muo.mutation = mutation
			node, err = muo.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(muo.hooks) - 1; i >= 0; i-- {
			if muo.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = muo.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, muo.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX is like Save, but panics if an error occurs.
func (muo *ModuleUpdateOne) SaveX(ctx context.Context) *Module {
	node, err := muo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (muo *ModuleUpdateOne) Exec(ctx context.Context) error {
	_, err := muo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (muo *ModuleUpdateOne) ExecX(ctx context.Context) {
	if err := muo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (muo *ModuleUpdateOne) sqlSave(ctx context.Context) (_node *Module, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   module.Table,
			Columns: module.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: module.FieldID,
			},
		},
	}
	id, ok := muo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "ID", err: fmt.Errorf("missing Module.ID for update")}
	}
	_spec.Node.ID.Value = id
	if fields := muo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, module.FieldID)
		for _, f := range fields {
			if !module.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != module.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := muo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := muo.mutation.Name(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: module.FieldName,
		})
	}
	if value, ok := muo.mutation.Description(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: module.FieldDescription,
		})
	}
	if muo.mutation.VersionsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := muo.mutation.RemovedVersionsIDs(); len(nodes) > 0 && !muo.mutation.VersionsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := muo.mutation.VersionsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   module.VersionsTable,
			Columns: []string{module.VersionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: moduleversion.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Module{config: muo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, muo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{module.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return nil, err
	}
	return _node, nil
}
