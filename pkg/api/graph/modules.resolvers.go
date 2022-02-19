package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
)

func (r *moduleResolver) LatestVersion(ctx context.Context, obj *ent.Module) (*ent.ModuleVersion, error) {
	version, err := obj.QueryVersions().Order(
		ent.Desc(moduleversion.FieldID),
	).First(ctx)

	if err != nil {
		if ent.IsNotFound(err) {
			return nil, nil
		}
		return nil, err
	}
	return version, nil
}

func (r *moduleResolver) Versions(ctx context.Context, obj *ent.Module, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.ModuleVersionOrder, where *ent.ModuleVersionWhereInput) (*ent.ModuleVersionConnection, error) {
	return obj.QueryVersions().Paginate(ctx, after, first, before, last)
}

// Module returns generated.ModuleResolver implementation.
func (r *Resolver) Module() generated.ModuleResolver { return &moduleResolver{r} }

type moduleResolver struct{ *Resolver }
