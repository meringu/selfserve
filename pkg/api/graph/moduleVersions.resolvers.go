package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/meringu/selfserve/pkg/api/ent"
	"github.com/meringu/selfserve/pkg/api/graph/generated"
)

func (r *moduleVersionResolver) Installations(ctx context.Context, obj *ent.ModuleVersion, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.InstallationOrder, where *ent.InstallationWhereInput) (*ent.InstallationConnection, error) {
	return obj.QueryInstallations().Paginate(ctx, after, first, before, last)
}

// ModuleVersion returns generated.ModuleVersionResolver implementation.
func (r *Resolver) ModuleVersion() generated.ModuleVersionResolver { return &moduleVersionResolver{r} }

type moduleVersionResolver struct{ *Resolver }
