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

func (r *groupResolver) Users(ctx context.Context, obj *ent.Group, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.UserOrder, where *ent.UserWhereInput) (*ent.UserConnection, error) {
	return obj.QueryUsers().Paginate(ctx, after, first, before, last)
}

func (r *groupResolver) ResolvedUsers(ctx context.Context, obj *ent.Group, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.UserOrder, where *ent.UserWhereInput) (*ent.UserConnection, error) {
	resolvedGroupIDs, err := resolveChildrenGroups(ctx, []*ent.Group{obj})
	if err != nil {
		return nil, err
	}

	return r.client.User.Query().Where(
		user.HasGroupsWith(group.IDIn(resolvedGroupIDs...)),
	).Paginate(ctx, after, first, before, last)
}

func (r *groupResolver) Children(ctx context.Context, obj *ent.Group, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.GroupOrder, where *ent.GroupWhereInput) (*ent.GroupConnection, error) {
	return obj.QueryChildren().Paginate(ctx, after, first, before, last)
}

// Group returns generated.GroupResolver implementation.
func (r *Resolver) Group() generated.GroupResolver { return &groupResolver{r} }

type groupResolver struct{ *Resolver }
