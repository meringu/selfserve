package graph

import "github.com/meringu/selfserve/pkg/api/ent"

func NewResolver(client *ent.Client) *Resolver {
	return &Resolver{
		client: client,
	}
}

type Resolver struct {
	client *ent.Client
}
