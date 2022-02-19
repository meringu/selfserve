package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
	"github.com/meringu/selfserve/pkg/api/graph/model"
)

func (r *mutationResolver) CreateGroup(ctx context.Context, input model.CreateGroup) (*ent.Group, error) {
	return r.client.Group.Create().
		SetName(input.Name).
		Save(ctx)
}

func (r *mutationResolver) UpdateGroup(ctx context.Context, input model.UpdateGroup) (*ent.Group, error) {
	update := r.client.Group.UpdateOneID(input.ID)

	if input.Name != nil {
		update.SetName(*input.Name)
	}

	if input.Parent != nil {
		if *input.Parent == input.ID {
			update.ClearParent()
		} else {
			update.SetParentID(*input.Parent)
		}
	}

	if input.Users != nil {
		update.ClearUsers()
		for _, userID := range input.Users {
			update.AddUserIDs(*userID)
		}
	}

	return update.Save(ctx)
}

func (r *mutationResolver) DeleteGroup(ctx context.Context, input model.DeleteGroup) (int, error) {
	return input.ID, r.client.Group.DeleteOneID(input.ID).
		Exec(ctx)
}

func (r *mutationResolver) CreateInstallation(ctx context.Context, input model.CreateInstallation) (*ent.Installation, error) {
	return r.client.Installation.Create().
		SetModuleVersionID(input.ModuleVersionID).
		Save(ctx)
}

func (r *mutationResolver) UpdateInstallation(ctx context.Context, input model.UpdateInstallation) (*ent.Installation, error) {
	return r.client.Installation.UpdateOneID(input.ID).
		Save(ctx)
}

func (r *mutationResolver) DeleteInstallation(ctx context.Context, input model.DeleteInstallation) (int, error) {
	return input.ID, r.client.Installation.DeleteOneID(input.ID).
		Exec(ctx)
}

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
	return input.ID, r.client.Module.DeleteOneID(input.ID).
		Exec(ctx)
}

func (r *mutationResolver) CreateModuleVersion(ctx context.Context, input model.CreateModuleVersion) (*ent.ModuleVersion, error) {
	return r.client.ModuleVersion.Create().
		SetModuleID(input.ID).
		Save(ctx)
}

func (r *mutationResolver) UpdateModuleVersion(ctx context.Context, input model.UpdateModuleVersion) (*ent.ModuleVersion, error) {
	return r.client.ModuleVersion.UpdateOneID(input.ID).
		Save(ctx)
}

func (r *mutationResolver) DeleteModuleVersion(ctx context.Context, input model.DeleteModuleVersion) (int, error) {
	return input.ID, r.client.ModuleVersion.DeleteOneID(input.ID).
		Exec(ctx)
}

func (r *mutationResolver) CreateNamespace(ctx context.Context, input model.CreateNamespace) (*ent.Namespace, error) {
	return r.client.Namespace.Create().
		SetName(input.Name).
		Save(ctx)
}

func (r *mutationResolver) UpdateNamespace(ctx context.Context, input model.UpdateNamespace) (*ent.Namespace, error) {
	update := r.client.Namespace.UpdateOneID(input.ID)

	if input.Name != nil {
		update.SetName(*input.Name)
	}

	return update.Save(ctx)
}

func (r *mutationResolver) DeleteNamespace(ctx context.Context, input model.DeleteNamespace) (int, error) {
	return input.ID, r.client.Namespace.DeleteOneID(input.ID).
		Exec(ctx)
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.CreateUser) (*ent.User, error) {
	return r.client.User.Create().
		SetName(input.Name).
		Save(ctx)
}

func (r *mutationResolver) UpdateUser(ctx context.Context, input model.UpdateUser) (*ent.User, error) {
	update := r.client.User.UpdateOneID(input.ID)

	if input.Name != nil {
		update.SetName(*input.Name)
	}

	return update.Save(ctx)
}

func (r *mutationResolver) DeleteUser(ctx context.Context, input model.DeleteUser) (int, error) {
	return input.ID, r.client.User.DeleteOneID(input.ID).
		Exec(ctx)
}

func (r *queryResolver) Node(ctx context.Context, id int) (ent.Noder, error) {
	return r.client.Noder(ctx, id)
}

func (r *queryResolver) User(ctx context.Context) (*ent.User, error) {
	return r.client.User.Query().First(ctx)
}

func (r *queryResolver) Groups(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.GroupOrder, where *ent.GroupWhereInput) (*ent.GroupConnection, error) {
	return r.client.Group.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithGroupFilter(where.Filter),
			ent.WithGroupOrder(orderBy),
		)
}

func (r *queryResolver) Installations(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.InstallationOrder, where *ent.InstallationWhereInput) (*ent.InstallationConnection, error) {
	return r.client.Installation.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithInstallationFilter(where.Filter),
			ent.WithInstallationOrder(orderBy),
		)
}

func (r *queryResolver) Modules(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.ModuleOrder, where *ent.ModuleWhereInput) (*ent.ModuleConnection, error) {
	return r.client.Module.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithModuleFilter(where.Filter),
			ent.WithModuleOrder(orderBy),
		)
}

func (r *queryResolver) ModuleVersions(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.ModuleVersionOrder, where *ent.ModuleVersionWhereInput) (*ent.ModuleVersionConnection, error) {
	return r.client.ModuleVersion.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithModuleVersionFilter(where.Filter),
			ent.WithModuleVersionOrder(orderBy),
		)
}

func (r *queryResolver) Namespaces(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.NamespaceOrder, where *ent.NamespaceWhereInput) (*ent.NamespaceConnection, error) {
	return r.client.Namespace.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithNamespaceFilter(where.Filter),
			ent.WithNamespaceOrder(orderBy),
		)
}

func (r *queryResolver) Users(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.UserOrder, where *ent.UserWhereInput) (*ent.UserConnection, error) {
	return r.client.User.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithUserFilter(where.Filter),
			ent.WithUserOrder(orderBy),
		)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
