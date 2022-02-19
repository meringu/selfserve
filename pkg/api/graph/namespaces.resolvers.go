package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/ent/group"
	"github.com/meringu/selfserve/pkg/api/ent/user"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
)

func (r *namespaceResolver) Groups(ctx context.Context, obj *ent.Namespace, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.GroupOrder, where *ent.GroupWhereInput) (*ent.GroupConnection, error) {
	return obj.QueryGroups().Paginate(ctx, after, first, before, last)
}

func (r *namespaceResolver) Users(ctx context.Context, obj *ent.Namespace, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.UserOrder, where *ent.UserWhereInput) (*ent.UserConnection, error) {
	return obj.QueryUsers().Paginate(ctx, after, first, before, last)
}

func (r *namespaceResolver) ResolvedUsers(ctx context.Context, obj *ent.Namespace, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.UserOrder, where *ent.UserWhereInput) (*ent.UserConnection, error) {
	groups, err := obj.Groups(ctx)
	if err != nil {
		return nil, err
	}

	resolvedGroupIDs, err := resolveChildrenGroups(ctx, groups)
	if err != nil {
		return nil, err
	}

	return r.client.User.Query().Where(
		user.HasGroupsWith(group.IDIn(resolvedGroupIDs...)),
	).Paginate(ctx, after, first, before, last)
}

// Namespace returns generated.NamespaceResolver implementation.
func (r *Resolver) Namespace() generated.NamespaceResolver { return &namespaceResolver{r} }

type namespaceResolver struct{ *Resolver }
