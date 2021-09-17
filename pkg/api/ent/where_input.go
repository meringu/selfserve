// Code generated by entc, DO NOT EDIT.

package ent

import (
	"fmt"
	"time"

	"github.com/meringu/selfserve/pkg/api/ent/module"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
	"github.com/meringu/selfserve/pkg/api/ent/predicate"
)

// ModuleWhereInput represents a where input for filtering Module queries.
type ModuleWhereInput struct {
	Not *ModuleWhereInput   `json:"not,omitempty"`
	Or  []*ModuleWhereInput `json:"or,omitempty"`
	And []*ModuleWhereInput `json:"and,omitempty"`

	// "id" field predicates.
	ID      *int  `json:"id,omitempty"`
	IDNEQ   *int  `json:"idNEQ,omitempty"`
	IDIn    []int `json:"idIn,omitempty"`
	IDNotIn []int `json:"idNotIn,omitempty"`
	IDGT    *int  `json:"idGT,omitempty"`
	IDGTE   *int  `json:"idGTE,omitempty"`
	IDLT    *int  `json:"idLT,omitempty"`
	IDLTE   *int  `json:"idLTE,omitempty"`

	// "name" field predicates.
	Name             *string  `json:"name,omitempty"`
	NameNEQ          *string  `json:"nameNEQ,omitempty"`
	NameIn           []string `json:"nameIn,omitempty"`
	NameNotIn        []string `json:"nameNotIn,omitempty"`
	NameGT           *string  `json:"nameGT,omitempty"`
	NameGTE          *string  `json:"nameGTE,omitempty"`
	NameLT           *string  `json:"nameLT,omitempty"`
	NameLTE          *string  `json:"nameLTE,omitempty"`
	NameContains     *string  `json:"nameContains,omitempty"`
	NameHasPrefix    *string  `json:"nameHasPrefix,omitempty"`
	NameHasSuffix    *string  `json:"nameHasSuffix,omitempty"`
	NameEqualFold    *string  `json:"nameEqualFold,omitempty"`
	NameContainsFold *string  `json:"nameContainsFold,omitempty"`

	// "description" field predicates.
	Description             *string  `json:"description,omitempty"`
	DescriptionNEQ          *string  `json:"descriptionNEQ,omitempty"`
	DescriptionIn           []string `json:"descriptionIn,omitempty"`
	DescriptionNotIn        []string `json:"descriptionNotIn,omitempty"`
	DescriptionGT           *string  `json:"descriptionGT,omitempty"`
	DescriptionGTE          *string  `json:"descriptionGTE,omitempty"`
	DescriptionLT           *string  `json:"descriptionLT,omitempty"`
	DescriptionLTE          *string  `json:"descriptionLTE,omitempty"`
	DescriptionContains     *string  `json:"descriptionContains,omitempty"`
	DescriptionHasPrefix    *string  `json:"descriptionHasPrefix,omitempty"`
	DescriptionHasSuffix    *string  `json:"descriptionHasSuffix,omitempty"`
	DescriptionEqualFold    *string  `json:"descriptionEqualFold,omitempty"`
	DescriptionContainsFold *string  `json:"descriptionContainsFold,omitempty"`

	// "created_at" field predicates.
	CreatedAt      *time.Time  `json:"createdAt,omitempty"`
	CreatedAtNEQ   *time.Time  `json:"createdAtNEQ,omitempty"`
	CreatedAtIn    []time.Time `json:"createdAtIn,omitempty"`
	CreatedAtNotIn []time.Time `json:"createdAtNotIn,omitempty"`
	CreatedAtGT    *time.Time  `json:"createdAtGT,omitempty"`
	CreatedAtGTE   *time.Time  `json:"createdAtGTE,omitempty"`
	CreatedAtLT    *time.Time  `json:"createdAtLT,omitempty"`
	CreatedAtLTE   *time.Time  `json:"createdAtLTE,omitempty"`

	// "versions" edge predicates.
	HasVersions     *bool                      `json:"hasVersions,omitempty"`
	HasVersionsWith []*ModuleVersionWhereInput `json:"hasVersionsWith,omitempty"`
}

// Filter applies the ModuleWhereInput filter on the ModuleQuery builder.
func (i *ModuleWhereInput) Filter(q *ModuleQuery) (*ModuleQuery, error) {
	if i == nil {
		return q, nil
	}
	p, err := i.P()
	if err != nil {
		return nil, err
	}
	return q.Where(p), nil
}

// P returns a predicate for filtering modules.
// An error is returned if the input is empty or invalid.
func (i *ModuleWhereInput) P() (predicate.Module, error) {
	var predicates []predicate.Module
	if i.Not != nil {
		p, err := i.Not.P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, module.Not(p))
	}
	switch n := len(i.Or); {
	case n == 1:
		p, err := i.Or[0].P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, p)
	case n > 1:
		or := make([]predicate.Module, 0, n)
		for _, w := range i.Or {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			or = append(or, p)
		}
		predicates = append(predicates, module.Or(or...))
	}
	switch n := len(i.And); {
	case n == 1:
		p, err := i.And[0].P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, p)
	case n > 1:
		and := make([]predicate.Module, 0, n)
		for _, w := range i.And {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			and = append(and, p)
		}
		predicates = append(predicates, module.And(and...))
	}
	if i.ID != nil {
		predicates = append(predicates, module.IDEQ(*i.ID))
	}
	if i.IDNEQ != nil {
		predicates = append(predicates, module.IDNEQ(*i.IDNEQ))
	}
	if len(i.IDIn) > 0 {
		predicates = append(predicates, module.IDIn(i.IDIn...))
	}
	if len(i.IDNotIn) > 0 {
		predicates = append(predicates, module.IDNotIn(i.IDNotIn...))
	}
	if i.IDGT != nil {
		predicates = append(predicates, module.IDGT(*i.IDGT))
	}
	if i.IDGTE != nil {
		predicates = append(predicates, module.IDGTE(*i.IDGTE))
	}
	if i.IDLT != nil {
		predicates = append(predicates, module.IDLT(*i.IDLT))
	}
	if i.IDLTE != nil {
		predicates = append(predicates, module.IDLTE(*i.IDLTE))
	}
	if i.Name != nil {
		predicates = append(predicates, module.NameEQ(*i.Name))
	}
	if i.NameNEQ != nil {
		predicates = append(predicates, module.NameNEQ(*i.NameNEQ))
	}
	if len(i.NameIn) > 0 {
		predicates = append(predicates, module.NameIn(i.NameIn...))
	}
	if len(i.NameNotIn) > 0 {
		predicates = append(predicates, module.NameNotIn(i.NameNotIn...))
	}
	if i.NameGT != nil {
		predicates = append(predicates, module.NameGT(*i.NameGT))
	}
	if i.NameGTE != nil {
		predicates = append(predicates, module.NameGTE(*i.NameGTE))
	}
	if i.NameLT != nil {
		predicates = append(predicates, module.NameLT(*i.NameLT))
	}
	if i.NameLTE != nil {
		predicates = append(predicates, module.NameLTE(*i.NameLTE))
	}
	if i.NameContains != nil {
		predicates = append(predicates, module.NameContains(*i.NameContains))
	}
	if i.NameHasPrefix != nil {
		predicates = append(predicates, module.NameHasPrefix(*i.NameHasPrefix))
	}
	if i.NameHasSuffix != nil {
		predicates = append(predicates, module.NameHasSuffix(*i.NameHasSuffix))
	}
	if i.NameEqualFold != nil {
		predicates = append(predicates, module.NameEqualFold(*i.NameEqualFold))
	}
	if i.NameContainsFold != nil {
		predicates = append(predicates, module.NameContainsFold(*i.NameContainsFold))
	}
	if i.Description != nil {
		predicates = append(predicates, module.DescriptionEQ(*i.Description))
	}
	if i.DescriptionNEQ != nil {
		predicates = append(predicates, module.DescriptionNEQ(*i.DescriptionNEQ))
	}
	if len(i.DescriptionIn) > 0 {
		predicates = append(predicates, module.DescriptionIn(i.DescriptionIn...))
	}
	if len(i.DescriptionNotIn) > 0 {
		predicates = append(predicates, module.DescriptionNotIn(i.DescriptionNotIn...))
	}
	if i.DescriptionGT != nil {
		predicates = append(predicates, module.DescriptionGT(*i.DescriptionGT))
	}
	if i.DescriptionGTE != nil {
		predicates = append(predicates, module.DescriptionGTE(*i.DescriptionGTE))
	}
	if i.DescriptionLT != nil {
		predicates = append(predicates, module.DescriptionLT(*i.DescriptionLT))
	}
	if i.DescriptionLTE != nil {
		predicates = append(predicates, module.DescriptionLTE(*i.DescriptionLTE))
	}
	if i.DescriptionContains != nil {
		predicates = append(predicates, module.DescriptionContains(*i.DescriptionContains))
	}
	if i.DescriptionHasPrefix != nil {
		predicates = append(predicates, module.DescriptionHasPrefix(*i.DescriptionHasPrefix))
	}
	if i.DescriptionHasSuffix != nil {
		predicates = append(predicates, module.DescriptionHasSuffix(*i.DescriptionHasSuffix))
	}
	if i.DescriptionEqualFold != nil {
		predicates = append(predicates, module.DescriptionEqualFold(*i.DescriptionEqualFold))
	}
	if i.DescriptionContainsFold != nil {
		predicates = append(predicates, module.DescriptionContainsFold(*i.DescriptionContainsFold))
	}
	if i.CreatedAt != nil {
		predicates = append(predicates, module.CreatedAtEQ(*i.CreatedAt))
	}
	if i.CreatedAtNEQ != nil {
		predicates = append(predicates, module.CreatedAtNEQ(*i.CreatedAtNEQ))
	}
	if len(i.CreatedAtIn) > 0 {
		predicates = append(predicates, module.CreatedAtIn(i.CreatedAtIn...))
	}
	if len(i.CreatedAtNotIn) > 0 {
		predicates = append(predicates, module.CreatedAtNotIn(i.CreatedAtNotIn...))
	}
	if i.CreatedAtGT != nil {
		predicates = append(predicates, module.CreatedAtGT(*i.CreatedAtGT))
	}
	if i.CreatedAtGTE != nil {
		predicates = append(predicates, module.CreatedAtGTE(*i.CreatedAtGTE))
	}
	if i.CreatedAtLT != nil {
		predicates = append(predicates, module.CreatedAtLT(*i.CreatedAtLT))
	}
	if i.CreatedAtLTE != nil {
		predicates = append(predicates, module.CreatedAtLTE(*i.CreatedAtLTE))
	}

	if i.HasVersions != nil {
		p := module.HasVersions()
		if !*i.HasVersions {
			p = module.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasVersionsWith) > 0 {
		with := make([]predicate.ModuleVersion, 0, len(i.HasVersionsWith))
		for _, w := range i.HasVersionsWith {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			with = append(with, p)
		}
		predicates = append(predicates, module.HasVersionsWith(with...))
	}
	switch len(predicates) {
	case 0:
		return nil, fmt.Errorf("github.com/meringu/selfserve/pkg/api/ent: empty predicate ModuleWhereInput")
	case 1:
		return predicates[0], nil
	default:
		return module.And(predicates...), nil
	}
}

// ModuleVersionWhereInput represents a where input for filtering ModuleVersion queries.
type ModuleVersionWhereInput struct {
	Not *ModuleVersionWhereInput   `json:"not,omitempty"`
	Or  []*ModuleVersionWhereInput `json:"or,omitempty"`
	And []*ModuleVersionWhereInput `json:"and,omitempty"`

	// "id" field predicates.
	ID      *int  `json:"id,omitempty"`
	IDNEQ   *int  `json:"idNEQ,omitempty"`
	IDIn    []int `json:"idIn,omitempty"`
	IDNotIn []int `json:"idNotIn,omitempty"`
	IDGT    *int  `json:"idGT,omitempty"`
	IDGTE   *int  `json:"idGTE,omitempty"`
	IDLT    *int  `json:"idLT,omitempty"`
	IDLTE   *int  `json:"idLTE,omitempty"`

	// "version" field predicates.
	Version             *string  `json:"version,omitempty"`
	VersionNEQ          *string  `json:"versionNEQ,omitempty"`
	VersionIn           []string `json:"versionIn,omitempty"`
	VersionNotIn        []string `json:"versionNotIn,omitempty"`
	VersionGT           *string  `json:"versionGT,omitempty"`
	VersionGTE          *string  `json:"versionGTE,omitempty"`
	VersionLT           *string  `json:"versionLT,omitempty"`
	VersionLTE          *string  `json:"versionLTE,omitempty"`
	VersionContains     *string  `json:"versionContains,omitempty"`
	VersionHasPrefix    *string  `json:"versionHasPrefix,omitempty"`
	VersionHasSuffix    *string  `json:"versionHasSuffix,omitempty"`
	VersionEqualFold    *string  `json:"versionEqualFold,omitempty"`
	VersionContainsFold *string  `json:"versionContainsFold,omitempty"`

	// "source" field predicates.
	Source             *string  `json:"source,omitempty"`
	SourceNEQ          *string  `json:"sourceNEQ,omitempty"`
	SourceIn           []string `json:"sourceIn,omitempty"`
	SourceNotIn        []string `json:"sourceNotIn,omitempty"`
	SourceGT           *string  `json:"sourceGT,omitempty"`
	SourceGTE          *string  `json:"sourceGTE,omitempty"`
	SourceLT           *string  `json:"sourceLT,omitempty"`
	SourceLTE          *string  `json:"sourceLTE,omitempty"`
	SourceContains     *string  `json:"sourceContains,omitempty"`
	SourceHasPrefix    *string  `json:"sourceHasPrefix,omitempty"`
	SourceHasSuffix    *string  `json:"sourceHasSuffix,omitempty"`
	SourceEqualFold    *string  `json:"sourceEqualFold,omitempty"`
	SourceContainsFold *string  `json:"sourceContainsFold,omitempty"`

	// "created_at" field predicates.
	CreatedAt      *time.Time  `json:"createdAt,omitempty"`
	CreatedAtNEQ   *time.Time  `json:"createdAtNEQ,omitempty"`
	CreatedAtIn    []time.Time `json:"createdAtIn,omitempty"`
	CreatedAtNotIn []time.Time `json:"createdAtNotIn,omitempty"`
	CreatedAtGT    *time.Time  `json:"createdAtGT,omitempty"`
	CreatedAtGTE   *time.Time  `json:"createdAtGTE,omitempty"`
	CreatedAtLT    *time.Time  `json:"createdAtLT,omitempty"`
	CreatedAtLTE   *time.Time  `json:"createdAtLTE,omitempty"`

	// "module" edge predicates.
	HasModule     *bool               `json:"hasModule,omitempty"`
	HasModuleWith []*ModuleWhereInput `json:"hasModuleWith,omitempty"`
}

// Filter applies the ModuleVersionWhereInput filter on the ModuleVersionQuery builder.
func (i *ModuleVersionWhereInput) Filter(q *ModuleVersionQuery) (*ModuleVersionQuery, error) {
	if i == nil {
		return q, nil
	}
	p, err := i.P()
	if err != nil {
		return nil, err
	}
	return q.Where(p), nil
}

// P returns a predicate for filtering moduleversions.
// An error is returned if the input is empty or invalid.
func (i *ModuleVersionWhereInput) P() (predicate.ModuleVersion, error) {
	var predicates []predicate.ModuleVersion
	if i.Not != nil {
		p, err := i.Not.P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, moduleversion.Not(p))
	}
	switch n := len(i.Or); {
	case n == 1:
		p, err := i.Or[0].P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, p)
	case n > 1:
		or := make([]predicate.ModuleVersion, 0, n)
		for _, w := range i.Or {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			or = append(or, p)
		}
		predicates = append(predicates, moduleversion.Or(or...))
	}
	switch n := len(i.And); {
	case n == 1:
		p, err := i.And[0].P()
		if err != nil {
			return nil, err
		}
		predicates = append(predicates, p)
	case n > 1:
		and := make([]predicate.ModuleVersion, 0, n)
		for _, w := range i.And {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			and = append(and, p)
		}
		predicates = append(predicates, moduleversion.And(and...))
	}
	if i.ID != nil {
		predicates = append(predicates, moduleversion.IDEQ(*i.ID))
	}
	if i.IDNEQ != nil {
		predicates = append(predicates, moduleversion.IDNEQ(*i.IDNEQ))
	}
	if len(i.IDIn) > 0 {
		predicates = append(predicates, moduleversion.IDIn(i.IDIn...))
	}
	if len(i.IDNotIn) > 0 {
		predicates = append(predicates, moduleversion.IDNotIn(i.IDNotIn...))
	}
	if i.IDGT != nil {
		predicates = append(predicates, moduleversion.IDGT(*i.IDGT))
	}
	if i.IDGTE != nil {
		predicates = append(predicates, moduleversion.IDGTE(*i.IDGTE))
	}
	if i.IDLT != nil {
		predicates = append(predicates, moduleversion.IDLT(*i.IDLT))
	}
	if i.IDLTE != nil {
		predicates = append(predicates, moduleversion.IDLTE(*i.IDLTE))
	}
	if i.Version != nil {
		predicates = append(predicates, moduleversion.VersionEQ(*i.Version))
	}
	if i.VersionNEQ != nil {
		predicates = append(predicates, moduleversion.VersionNEQ(*i.VersionNEQ))
	}
	if len(i.VersionIn) > 0 {
		predicates = append(predicates, moduleversion.VersionIn(i.VersionIn...))
	}
	if len(i.VersionNotIn) > 0 {
		predicates = append(predicates, moduleversion.VersionNotIn(i.VersionNotIn...))
	}
	if i.VersionGT != nil {
		predicates = append(predicates, moduleversion.VersionGT(*i.VersionGT))
	}
	if i.VersionGTE != nil {
		predicates = append(predicates, moduleversion.VersionGTE(*i.VersionGTE))
	}
	if i.VersionLT != nil {
		predicates = append(predicates, moduleversion.VersionLT(*i.VersionLT))
	}
	if i.VersionLTE != nil {
		predicates = append(predicates, moduleversion.VersionLTE(*i.VersionLTE))
	}
	if i.VersionContains != nil {
		predicates = append(predicates, moduleversion.VersionContains(*i.VersionContains))
	}
	if i.VersionHasPrefix != nil {
		predicates = append(predicates, moduleversion.VersionHasPrefix(*i.VersionHasPrefix))
	}
	if i.VersionHasSuffix != nil {
		predicates = append(predicates, moduleversion.VersionHasSuffix(*i.VersionHasSuffix))
	}
	if i.VersionEqualFold != nil {
		predicates = append(predicates, moduleversion.VersionEqualFold(*i.VersionEqualFold))
	}
	if i.VersionContainsFold != nil {
		predicates = append(predicates, moduleversion.VersionContainsFold(*i.VersionContainsFold))
	}
	if i.Source != nil {
		predicates = append(predicates, moduleversion.SourceEQ(*i.Source))
	}
	if i.SourceNEQ != nil {
		predicates = append(predicates, moduleversion.SourceNEQ(*i.SourceNEQ))
	}
	if len(i.SourceIn) > 0 {
		predicates = append(predicates, moduleversion.SourceIn(i.SourceIn...))
	}
	if len(i.SourceNotIn) > 0 {
		predicates = append(predicates, moduleversion.SourceNotIn(i.SourceNotIn...))
	}
	if i.SourceGT != nil {
		predicates = append(predicates, moduleversion.SourceGT(*i.SourceGT))
	}
	if i.SourceGTE != nil {
		predicates = append(predicates, moduleversion.SourceGTE(*i.SourceGTE))
	}
	if i.SourceLT != nil {
		predicates = append(predicates, moduleversion.SourceLT(*i.SourceLT))
	}
	if i.SourceLTE != nil {
		predicates = append(predicates, moduleversion.SourceLTE(*i.SourceLTE))
	}
	if i.SourceContains != nil {
		predicates = append(predicates, moduleversion.SourceContains(*i.SourceContains))
	}
	if i.SourceHasPrefix != nil {
		predicates = append(predicates, moduleversion.SourceHasPrefix(*i.SourceHasPrefix))
	}
	if i.SourceHasSuffix != nil {
		predicates = append(predicates, moduleversion.SourceHasSuffix(*i.SourceHasSuffix))
	}
	if i.SourceEqualFold != nil {
		predicates = append(predicates, moduleversion.SourceEqualFold(*i.SourceEqualFold))
	}
	if i.SourceContainsFold != nil {
		predicates = append(predicates, moduleversion.SourceContainsFold(*i.SourceContainsFold))
	}
	if i.CreatedAt != nil {
		predicates = append(predicates, moduleversion.CreatedAtEQ(*i.CreatedAt))
	}
	if i.CreatedAtNEQ != nil {
		predicates = append(predicates, moduleversion.CreatedAtNEQ(*i.CreatedAtNEQ))
	}
	if len(i.CreatedAtIn) > 0 {
		predicates = append(predicates, moduleversion.CreatedAtIn(i.CreatedAtIn...))
	}
	if len(i.CreatedAtNotIn) > 0 {
		predicates = append(predicates, moduleversion.CreatedAtNotIn(i.CreatedAtNotIn...))
	}
	if i.CreatedAtGT != nil {
		predicates = append(predicates, moduleversion.CreatedAtGT(*i.CreatedAtGT))
	}
	if i.CreatedAtGTE != nil {
		predicates = append(predicates, moduleversion.CreatedAtGTE(*i.CreatedAtGTE))
	}
	if i.CreatedAtLT != nil {
		predicates = append(predicates, moduleversion.CreatedAtLT(*i.CreatedAtLT))
	}
	if i.CreatedAtLTE != nil {
		predicates = append(predicates, moduleversion.CreatedAtLTE(*i.CreatedAtLTE))
	}

	if i.HasModule != nil {
		p := moduleversion.HasModule()
		if !*i.HasModule {
			p = moduleversion.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasModuleWith) > 0 {
		with := make([]predicate.Module, 0, len(i.HasModuleWith))
		for _, w := range i.HasModuleWith {
			p, err := w.P()
			if err != nil {
				return nil, err
			}
			with = append(with, p)
		}
		predicates = append(predicates, moduleversion.HasModuleWith(with...))
	}
	switch len(predicates) {
	case 0:
		return nil, fmt.Errorf("github.com/meringu/selfserve/pkg/api/ent: empty predicate ModuleVersionWhereInput")
	case 1:
		return predicates[0], nil
	default:
		return moduleversion.And(predicates...), nil
	}
}
