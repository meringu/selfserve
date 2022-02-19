package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/ent/group"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
)

func (r *userResolver) Groups(ctx context.Context, obj *ent.User, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.GroupOrder, where *ent.GroupWhereInput) (*ent.GroupConnection, error) {
	return obj.QueryGroups().Paginate(ctx, after, first, before, last)
}

func (r *userResolver) ResolvedGroups(ctx context.Context, obj *ent.User, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.GroupOrder, where *ent.GroupWhereInput) (*ent.GroupConnection, error) {
	groups, err := obj.Groups(ctx)
	if err != nil {
		return nil, err
	}

	resolvedGroupIDs, err := resolveParentGroups(ctx, groups)
	if err != nil {
		return nil, err
	}

	return r.client.Group.Query().Where(
		group.IDIn(resolvedGroupIDs...),
	).Paginate(ctx, after, first, before, last)
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
