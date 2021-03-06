// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
	"github.com/meringu/selfserve/pkg/api/ent/predicate"
)

// ModuleVersionDelete is the builder for deleting a ModuleVersion entity.
type ModuleVersionDelete struct {
	config
	hooks    []Hook
	mutation *ModuleVersionMutation
}

// Where appends a list predicates to the ModuleVersionDelete builder.
func (mvd *ModuleVersionDelete) Where(ps ...predicate.ModuleVersion) *ModuleVersionDelete {
	mvd.mutation.Where(ps...)
	return mvd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (mvd *ModuleVersionDelete) Exec(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(mvd.hooks) == 0 {
		affected, err = mvd.sqlExec(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ModuleVersionMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			mvd.mutation = mutation
			affected, err = mvd.sqlExec(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(mvd.hooks) - 1; i >= 0; i-- {
			if mvd.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = mvd.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, mvd.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// ExecX is like Exec, but panics if an error occurs.
func (mvd *ModuleVersionDelete) ExecX(ctx context.Context) int {
	n, err := mvd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (mvd *ModuleVersionDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: moduleversion.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: moduleversion.FieldID,
			},
		},
	}
	if ps := mvd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return sqlgraph.DeleteNodes(ctx, mvd.driver, _spec)
}

// ModuleVersionDeleteOne is the builder for deleting a single ModuleVersion entity.
type ModuleVersionDeleteOne struct {
	mvd *ModuleVersionDelete
}

// Exec executes the deletion query.
func (mvdo *ModuleVersionDeleteOne) Exec(ctx context.Context) error {
	n, err := mvdo.mvd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{moduleversion.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (mvdo *ModuleVersionDeleteOne) ExecX(ctx context.Context) {
	mvdo.mvd.ExecX(ctx)
}
