package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
	"github.com/meringu/selfserve/pkg/api/graph/model"
)

func (r *mutationResolver) CreateModule(ctx context.Context, input model.CreateModule) (*ent.Module, error) {
	return r.client.Module.Create().
		SetName(input.Name).
		SetDescription(input.Description).
		Save(ctx)
}

func (r *mutationResolver) UpdateModule(ctx context.Context, input model.UpdateModule) (*ent.Module, error) {
	update := r.client.Module.UpdateOneID(input.ID)

	if input.Name != nil {
		update.SetName(*input.Name)
	}

	if input.Description != nil {
		update.SetDescription(*input.Description)
	}

	return update.Save(ctx)
}

func (r *mutationResolver) DeleteModule(ctx context.Context, input model.DeleteModule) (int, error) {
	return input.ID, r.client.Module.DeleteOneID(input.ID).Exec(ctx)
}

func (r *mutationResolver) CreateModuleVersion(ctx context.Context, input model.CreateModuleVersion) (*ent.ModuleVersion, error) {
	return r.client.ModuleVersion.Create().
		SetModuleID(input.Module).
		SetVersion(input.Version).
		SetSource(input.Source).
		Save(ctx)
}

func (r *mutationResolver) UpdateModuleVersion(ctx context.Context, input model.UpdateModuleVersion) (*ent.ModuleVersion, error) {
	update := r.client.ModuleVersion.UpdateOneID(input.ID)

	if input.Version != nil {
		update.SetVersion(*input.Version)
	}

	if input.Source != nil {
		update.SetSource(*input.Source)
	}

	return update.Save(ctx)
}

func (r *mutationResolver) DeleteModuleVersion(ctx context.Context, input model.DeleteModuleVersion) (int, error) {
	return input.ID, r.client.ModuleVersion.DeleteOneID(input.ID).Exec(ctx)
}

func (r *queryResolver) Modules(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.ModuleOrder, where *ent.ModuleWhereInput) (*ent.ModuleConnection, error) {
	return r.Resolver.client.Module.Query().Paginate(ctx, after, first, before, last,
		ent.WithModuleOrder(orderBy),
		ent.WithModuleFilter(where.Filter),
	)
}

func (r *queryResolver) Module(ctx context.Context, id int) (*ent.Module, error) {
	return r.Resolver.client.Module.Get(ctx, id)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
