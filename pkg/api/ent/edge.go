// Code generated by entc, DO NOT EDIT.

package ent

import "context"

func (gr *Group) Users(ctx context.Context) ([]*User, error) {
	result, err := gr.Edges.UsersOrErr()
	if IsNotLoaded(err) {
		result, err = gr.QueryUsers().All(ctx)
	}
	return result, err
}

func (gr *Group) Parent(ctx context.Context) (*Group, error) {
	result, err := gr.Edges.ParentOrErr()
	if IsNotLoaded(err) {
		result, err = gr.QueryParent().Only(ctx)
	}
	return result, MaskNotFound(err)
}

func (gr *Group) Children(ctx context.Context) ([]*Group, error) {
	result, err := gr.Edges.ChildrenOrErr()
	if IsNotLoaded(err) {
		result, err = gr.QueryChildren().All(ctx)
	}
	return result, err
}

func (gr *Group) Namespaces(ctx context.Context) ([]*Namespace, error) {
	result, err := gr.Edges.NamespacesOrErr()
	if IsNotLoaded(err) {
		result, err = gr.QueryNamespaces().All(ctx)
	}
	return result, err
}

func (i *Installation) ModuleVersion(ctx context.Context) (*ModuleVersion, error) {
	result, err := i.Edges.ModuleVersionOrErr()
	if IsNotLoaded(err) {
		result, err = i.QueryModuleVersion().Only(ctx)
	}
	return result, MaskNotFound(err)
}

func (m *Module) Namespace(ctx context.Context) (*Namespace, error) {
	result, err := m.Edges.NamespaceOrErr()
	if IsNotLoaded(err) {
		result, err = m.QueryNamespace().Only(ctx)
	}
	return result, MaskNotFound(err)
}

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

func (mv *ModuleVersion) Installations(ctx context.Context) ([]*Installation, error) {
	result, err := mv.Edges.InstallationsOrErr()
	if IsNotLoaded(err) {
		result, err = mv.QueryInstallations().All(ctx)
	}
	return result, err
}

func (n *Namespace) Groups(ctx context.Context) ([]*Group, error) {
	result, err := n.Edges.GroupsOrErr()
	if IsNotLoaded(err) {
		result, err = n.QueryGroups().All(ctx)
	}
	return result, err
}

func (n *Namespace) Users(ctx context.Context) ([]*User, error) {
	result, err := n.Edges.UsersOrErr()
	if IsNotLoaded(err) {
		result, err = n.QueryUsers().All(ctx)
	}
	return result, err
}

func (n *Namespace) Modules(ctx context.Context) ([]*Module, error) {
	result, err := n.Edges.ModulesOrErr()
	if IsNotLoaded(err) {
		result, err = n.QueryModules().All(ctx)
	}
	return result, err
}

func (n *Namespace) Installations(ctx context.Context) ([]*Installation, error) {
	result, err := n.Edges.InstallationsOrErr()
	if IsNotLoaded(err) {
		result, err = n.QueryInstallations().All(ctx)
	}
	return result, err
}

func (u *User) Groups(ctx context.Context) ([]*Group, error) {
	result, err := u.Edges.GroupsOrErr()
	if IsNotLoaded(err) {
		result, err = u.QueryGroups().All(ctx)
	}
	return result, err
}

func (u *User) Namespaces(ctx context.Context) ([]*Namespace, error) {
	result, err := u.Edges.NamespacesOrErr()
	if IsNotLoaded(err) {
		result, err = u.QueryNamespaces().All(ctx)
	}
	return result, err
}
