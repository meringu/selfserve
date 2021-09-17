// Code generated by entc, DO NOT EDIT.

package ent

import "context"

func (m *Module) Versions(ctx context.Context) ([]*ModuleVersion, error) {
	result, err := m.Edges.VersionsOrErr()
	if IsNotLoaded(err) {
		result, err = m.QueryVersions().All(ctx)
	}
	return result, err
}

func (mv *ModuleVersion) Module(ctx context.Context) (*Module, error) {
	result, err := mv.Edges.ModuleOrErr()
	if IsNotLoaded(err) {
		result, err = mv.QueryModule().Only(ctx)
	}
	return result, MaskNotFound(err)
}