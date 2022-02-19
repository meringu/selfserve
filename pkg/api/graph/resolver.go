package graph

import (
	"context"
	"sort"

	"github.com/meringu/selfserve/pkg/api/ent"
)

func NewResolver(client *ent.Client) *Resolver {
	return &Resolver{
		client: client.Debug(),
	}
}

type Resolver struct {
	client *ent.Client
}

// resolveParentGroups recursively traverses group parents returning all visited groups
func resolveParentGroups(ctx context.Context, groups []*ent.Group) ([]int, error) {
	visitedGroups := map[int]bool{}

	for _, group := range groups {
		err := resolveParentGroupsRecursive(ctx, group, visitedGroups)
		if err != nil {
			return nil, err
		}
	}

	ids := []int{}
	for id, _ := range visitedGroups {
		ids = append(ids, id)
	}

	sort.Ints(ids)

	return ids, nil
}

func resolveParentGroupsRecursive(ctx context.Context, group *ent.Group, visitedGroups map[int]bool) error {
	if _, ok := visitedGroups[group.ID]; ok {
		return nil
	}

	visitedGroups[group.ID] = true

	parent, err := group.Parent(ctx)
	if err != nil {
		return err
	}

	if parent != nil {
		return resolveParentGroupsRecursive(ctx, parent, visitedGroups)
	}

	return nil
}

// resolveChildrenGroups recursively traverses group parents returning all visited groups
func resolveChildrenGroups(ctx context.Context, groups []*ent.Group) ([]int, error) {
	visitedGroups := map[int]bool{}

	for _, group := range groups {
		err := resolveChildrenGroupsRecursive(ctx, group, visitedGroups)
		if err != nil {
			return nil, err
		}
	}

	ids := []int{}
	for id, _ := range visitedGroups {
		ids = append(ids, id)
	}

	sort.Ints(ids)

	return ids, nil
}

func resolveChildrenGroupsRecursive(ctx context.Context, group *ent.Group, visitedGroups map[int]bool) error {
	if _, ok := visitedGroups[group.ID]; ok {
		return nil
	}

	visitedGroups[group.ID] = true

	children, err := group.Children(ctx)
	if err != nil {
		return err
	}

	for _, child := range children {
		return resolveChildrenGroupsRecursive(ctx, child, visitedGroups)
	}

	return nil
}
