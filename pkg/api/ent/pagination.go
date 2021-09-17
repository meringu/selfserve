// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"strconv"
	"strings"

	"entgo.io/ent/dialect/sql"
	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/errcode"
	"github.com/meringu/selfserve/pkg/api/ent/module"
	"github.com/meringu/selfserve/pkg/api/ent/moduleversion"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"github.com/vmihailenco/msgpack/v5"
)

// OrderDirection defines the directions in which to order a list of items.
type OrderDirection string

const (
	// OrderDirectionAsc specifies an ascending order.
	OrderDirectionAsc OrderDirection = "ASC"
	// OrderDirectionDesc specifies a descending order.
	OrderDirectionDesc OrderDirection = "DESC"
)

// Validate the order direction value.
func (o OrderDirection) Validate() error {
	if o != OrderDirectionAsc && o != OrderDirectionDesc {
		return fmt.Errorf("%s is not a valid OrderDirection", o)
	}
	return nil
}

// String implements fmt.Stringer interface.
func (o OrderDirection) String() string {
	return string(o)
}

// MarshalGQL implements graphql.Marshaler interface.
func (o OrderDirection) MarshalGQL(w io.Writer) {
	io.WriteString(w, strconv.Quote(o.String()))
}

// UnmarshalGQL implements graphql.Unmarshaler interface.
func (o *OrderDirection) UnmarshalGQL(val interface{}) error {
	str, ok := val.(string)
	if !ok {
		return fmt.Errorf("order direction %T must be a string", val)
	}
	*o = OrderDirection(str)
	return o.Validate()
}

func (o OrderDirection) reverse() OrderDirection {
	if o == OrderDirectionDesc {
		return OrderDirectionAsc
	}
	return OrderDirectionDesc
}

func (o OrderDirection) orderFunc(field string) OrderFunc {
	if o == OrderDirectionDesc {
		return Desc(field)
	}
	return Asc(field)
}

func cursorsToPredicates(direction OrderDirection, after, before *Cursor, field, idField string) []func(s *sql.Selector) {
	var predicates []func(s *sql.Selector)
	if after != nil {
		if after.Value != nil {
			var predicate func([]string, ...interface{}) *sql.Predicate
			if direction == OrderDirectionAsc {
				predicate = sql.CompositeGT
			} else {
				predicate = sql.CompositeLT
			}
			predicates = append(predicates, func(s *sql.Selector) {
				s.Where(predicate(
					s.Columns(field, idField),
					after.Value, after.ID,
				))
			})
		} else {
			var predicate func(string, interface{}) *sql.Predicate
			if direction == OrderDirectionAsc {
				predicate = sql.GT
			} else {
				predicate = sql.LT
			}
			predicates = append(predicates, func(s *sql.Selector) {
				s.Where(predicate(
					s.C(idField),
					after.ID,
				))
			})
		}
	}
	if before != nil {
		if before.Value != nil {
			var predicate func([]string, ...interface{}) *sql.Predicate
			if direction == OrderDirectionAsc {
				predicate = sql.CompositeLT
			} else {
				predicate = sql.CompositeGT
			}
			predicates = append(predicates, func(s *sql.Selector) {
				s.Where(predicate(
					s.Columns(field, idField),
					before.Value, before.ID,
				))
			})
		} else {
			var predicate func(string, interface{}) *sql.Predicate
			if direction == OrderDirectionAsc {
				predicate = sql.LT
			} else {
				predicate = sql.GT
			}
			predicates = append(predicates, func(s *sql.Selector) {
				s.Where(predicate(
					s.C(idField),
					before.ID,
				))
			})
		}
	}
	return predicates
}

// PageInfo of a connection type.
type PageInfo struct {
	HasNextPage     bool    `json:"hasNextPage"`
	HasPreviousPage bool    `json:"hasPreviousPage"`
	StartCursor     *Cursor `json:"startCursor"`
	EndCursor       *Cursor `json:"endCursor"`
}

// Cursor of an edge type.
type Cursor struct {
	ID    int   `msgpack:"i"`
	Value Value `msgpack:"v,omitempty"`
}

// MarshalGQL implements graphql.Marshaler interface.
func (c Cursor) MarshalGQL(w io.Writer) {
	quote := []byte{'"'}
	w.Write(quote)
	defer w.Write(quote)
	wc := base64.NewEncoder(base64.RawStdEncoding, w)
	defer wc.Close()
	_ = msgpack.NewEncoder(wc).Encode(c)
}

// UnmarshalGQL implements graphql.Unmarshaler interface.
func (c *Cursor) UnmarshalGQL(v interface{}) error {
	s, ok := v.(string)
	if !ok {
		return fmt.Errorf("%T is not a string", v)
	}
	if err := msgpack.NewDecoder(
		base64.NewDecoder(
			base64.RawStdEncoding,
			strings.NewReader(s),
		),
	).Decode(c); err != nil {
		return fmt.Errorf("cannot decode cursor: %w", err)
	}
	return nil
}

const errInvalidPagination = "INVALID_PAGINATION"

func validateFirstLast(first, last *int) (err *gqlerror.Error) {
	switch {
	case first != nil && last != nil:
		err = &gqlerror.Error{
			Message: "Passing both `first` and `last` to paginate a connection is not supported.",
		}
	case first != nil && *first < 0:
		err = &gqlerror.Error{
			Message: "`first` on a connection cannot be less than zero.",
		}
		errcode.Set(err, errInvalidPagination)
	case last != nil && *last < 0:
		err = &gqlerror.Error{
			Message: "`last` on a connection cannot be less than zero.",
		}
		errcode.Set(err, errInvalidPagination)
	}
	return err
}

func getCollectedField(ctx context.Context, path ...string) *graphql.CollectedField {
	fc := graphql.GetFieldContext(ctx)
	if fc == nil {
		return nil
	}
	oc := graphql.GetOperationContext(ctx)
	field := fc.Field

walk:
	for _, name := range path {
		for _, f := range graphql.CollectFields(oc, field.Selections, nil) {
			if f.Name == name {
				field = f
				continue walk
			}
		}
		return nil
	}
	return &field
}

func hasCollectedField(ctx context.Context, path ...string) bool {
	if graphql.GetFieldContext(ctx) == nil {
		return true
	}
	return getCollectedField(ctx, path...) != nil
}

const (
	edgesField      = "edges"
	nodeField       = "node"
	pageInfoField   = "pageInfo"
	totalCountField = "totalCount"
)

// ModuleEdge is the edge representation of Module.
type ModuleEdge struct {
	Node   *Module `json:"node"`
	Cursor Cursor  `json:"cursor"`
}

// ModuleConnection is the connection containing edges to Module.
type ModuleConnection struct {
	Edges      []*ModuleEdge `json:"edges"`
	PageInfo   PageInfo      `json:"pageInfo"`
	TotalCount int           `json:"totalCount"`
}

// ModulePaginateOption enables pagination customization.
type ModulePaginateOption func(*modulePager) error

// WithModuleOrder configures pagination ordering.
func WithModuleOrder(order *ModuleOrder) ModulePaginateOption {
	if order == nil {
		order = DefaultModuleOrder
	}
	o := *order
	return func(pager *modulePager) error {
		if err := o.Direction.Validate(); err != nil {
			return err
		}
		if o.Field == nil {
			o.Field = DefaultModuleOrder.Field
		}
		pager.order = &o
		return nil
	}
}

// WithModuleFilter configures pagination filter.
func WithModuleFilter(filter func(*ModuleQuery) (*ModuleQuery, error)) ModulePaginateOption {
	return func(pager *modulePager) error {
		if filter == nil {
			return errors.New("ModuleQuery filter cannot be nil")
		}
		pager.filter = filter
		return nil
	}
}

type modulePager struct {
	order  *ModuleOrder
	filter func(*ModuleQuery) (*ModuleQuery, error)
}

func newModulePager(opts []ModulePaginateOption) (*modulePager, error) {
	pager := &modulePager{}
	for _, opt := range opts {
		if err := opt(pager); err != nil {
			return nil, err
		}
	}
	if pager.order == nil {
		pager.order = DefaultModuleOrder
	}
	return pager, nil
}

func (p *modulePager) applyFilter(query *ModuleQuery) (*ModuleQuery, error) {
	if p.filter != nil {
		return p.filter(query)
	}
	return query, nil
}

func (p *modulePager) toCursor(m *Module) Cursor {
	return p.order.Field.toCursor(m)
}

func (p *modulePager) applyCursors(query *ModuleQuery, after, before *Cursor) *ModuleQuery {
	for _, predicate := range cursorsToPredicates(
		p.order.Direction, after, before,
		p.order.Field.field, DefaultModuleOrder.Field.field,
	) {
		query = query.Where(predicate)
	}
	return query
}

func (p *modulePager) applyOrder(query *ModuleQuery, reverse bool) *ModuleQuery {
	direction := p.order.Direction
	if reverse {
		direction = direction.reverse()
	}
	query = query.Order(direction.orderFunc(p.order.Field.field))
	if p.order.Field != DefaultModuleOrder.Field {
		query = query.Order(direction.orderFunc(DefaultModuleOrder.Field.field))
	}
	return query
}

// Paginate executes the query and returns a relay based cursor connection to Module.
func (m *ModuleQuery) Paginate(
	ctx context.Context, after *Cursor, first *int,
	before *Cursor, last *int, opts ...ModulePaginateOption,
) (*ModuleConnection, error) {
	if err := validateFirstLast(first, last); err != nil {
		return nil, err
	}
	pager, err := newModulePager(opts)
	if err != nil {
		return nil, err
	}

	if m, err = pager.applyFilter(m); err != nil {
		return nil, err
	}

	conn := &ModuleConnection{Edges: []*ModuleEdge{}}
	if !hasCollectedField(ctx, edgesField) || first != nil && *first == 0 || last != nil && *last == 0 {
		if hasCollectedField(ctx, totalCountField) ||
			hasCollectedField(ctx, pageInfoField) {
			count, err := m.Count(ctx)
			if err != nil {
				return nil, err
			}
			conn.TotalCount = count
			conn.PageInfo.HasNextPage = first != nil && count > 0
			conn.PageInfo.HasPreviousPage = last != nil && count > 0
		}
		return conn, nil
	}

	if (after != nil || first != nil || before != nil || last != nil) && hasCollectedField(ctx, totalCountField) {
		count, err := m.Clone().Count(ctx)
		if err != nil {
			return nil, err
		}
		conn.TotalCount = count
	}

	m = pager.applyCursors(m, after, before)
	m = pager.applyOrder(m, last != nil)
	var limit int
	if first != nil {
		limit = *first + 1
	} else if last != nil {
		limit = *last + 1
	}
	if limit > 0 {
		m = m.Limit(limit)
	}

	if field := getCollectedField(ctx, edgesField, nodeField); field != nil {
		m = m.collectField(graphql.GetOperationContext(ctx), *field)
	}

	nodes, err := m.All(ctx)
	if err != nil || len(nodes) == 0 {
		return conn, err
	}

	if len(nodes) == limit {
		conn.PageInfo.HasNextPage = first != nil
		conn.PageInfo.HasPreviousPage = last != nil
		nodes = nodes[:len(nodes)-1]
	}

	var nodeAt func(int) *Module
	if last != nil {
		n := len(nodes) - 1
		nodeAt = func(i int) *Module {
			return nodes[n-i]
		}
	} else {
		nodeAt = func(i int) *Module {
			return nodes[i]
		}
	}

	conn.Edges = make([]*ModuleEdge, len(nodes))
	for i := range nodes {
		node := nodeAt(i)
		conn.Edges[i] = &ModuleEdge{
			Node:   node,
			Cursor: pager.toCursor(node),
		}
	}

	conn.PageInfo.StartCursor = &conn.Edges[0].Cursor
	conn.PageInfo.EndCursor = &conn.Edges[len(conn.Edges)-1].Cursor
	if conn.TotalCount == 0 {
		conn.TotalCount = len(nodes)
	}

	return conn, nil
}

var (
	// ModuleOrderFieldName orders Module by name.
	ModuleOrderFieldName = &ModuleOrderField{
		field: module.FieldName,
		toCursor: func(m *Module) Cursor {
			return Cursor{
				ID:    m.ID,
				Value: m.Name,
			}
		},
	}
	// ModuleOrderFieldCreatedAt orders Module by created_at.
	ModuleOrderFieldCreatedAt = &ModuleOrderField{
		field: module.FieldCreatedAt,
		toCursor: func(m *Module) Cursor {
			return Cursor{
				ID:    m.ID,
				Value: m.CreatedAt,
			}
		},
	}
)

// String implement fmt.Stringer interface.
func (f ModuleOrderField) String() string {
	var str string
	switch f.field {
	case module.FieldName:
		str = "NAME"
	case module.FieldCreatedAt:
		str = "CREATED_AT"
	}
	return str
}

// MarshalGQL implements graphql.Marshaler interface.
func (f ModuleOrderField) MarshalGQL(w io.Writer) {
	io.WriteString(w, strconv.Quote(f.String()))
}

// UnmarshalGQL implements graphql.Unmarshaler interface.
func (f *ModuleOrderField) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("ModuleOrderField %T must be a string", v)
	}
	switch str {
	case "NAME":
		*f = *ModuleOrderFieldName
	case "CREATED_AT":
		*f = *ModuleOrderFieldCreatedAt
	default:
		return fmt.Errorf("%s is not a valid ModuleOrderField", str)
	}
	return nil
}

// ModuleOrderField defines the ordering field of Module.
type ModuleOrderField struct {
	field    string
	toCursor func(*Module) Cursor
}

// ModuleOrder defines the ordering of Module.
type ModuleOrder struct {
	Direction OrderDirection    `json:"direction"`
	Field     *ModuleOrderField `json:"field"`
}

// DefaultModuleOrder is the default ordering of Module.
var DefaultModuleOrder = &ModuleOrder{
	Direction: OrderDirectionAsc,
	Field: &ModuleOrderField{
		field: module.FieldID,
		toCursor: func(m *Module) Cursor {
			return Cursor{ID: m.ID}
		},
	},
}

// ToEdge converts Module into ModuleEdge.
func (m *Module) ToEdge(order *ModuleOrder) *ModuleEdge {
	if order == nil {
		order = DefaultModuleOrder
	}
	return &ModuleEdge{
		Node:   m,
		Cursor: order.Field.toCursor(m),
	}
}

// ModuleVersionEdge is the edge representation of ModuleVersion.
type ModuleVersionEdge struct {
	Node   *ModuleVersion `json:"node"`
	Cursor Cursor         `json:"cursor"`
}

// ModuleVersionConnection is the connection containing edges to ModuleVersion.
type ModuleVersionConnection struct {
	Edges      []*ModuleVersionEdge `json:"edges"`
	PageInfo   PageInfo             `json:"pageInfo"`
	TotalCount int                  `json:"totalCount"`
}

// ModuleVersionPaginateOption enables pagination customization.
type ModuleVersionPaginateOption func(*moduleVersionPager) error

// WithModuleVersionOrder configures pagination ordering.
func WithModuleVersionOrder(order *ModuleVersionOrder) ModuleVersionPaginateOption {
	if order == nil {
		order = DefaultModuleVersionOrder
	}
	o := *order
	return func(pager *moduleVersionPager) error {
		if err := o.Direction.Validate(); err != nil {
			return err
		}
		if o.Field == nil {
			o.Field = DefaultModuleVersionOrder.Field
		}
		pager.order = &o
		return nil
	}
}

// WithModuleVersionFilter configures pagination filter.
func WithModuleVersionFilter(filter func(*ModuleVersionQuery) (*ModuleVersionQuery, error)) ModuleVersionPaginateOption {
	return func(pager *moduleVersionPager) error {
		if filter == nil {
			return errors.New("ModuleVersionQuery filter cannot be nil")
		}
		pager.filter = filter
		return nil
	}
}

type moduleVersionPager struct {
	order  *ModuleVersionOrder
	filter func(*ModuleVersionQuery) (*ModuleVersionQuery, error)
}

func newModuleVersionPager(opts []ModuleVersionPaginateOption) (*moduleVersionPager, error) {
	pager := &moduleVersionPager{}
	for _, opt := range opts {
		if err := opt(pager); err != nil {
			return nil, err
		}
	}
	if pager.order == nil {
		pager.order = DefaultModuleVersionOrder
	}
	return pager, nil
}

func (p *moduleVersionPager) applyFilter(query *ModuleVersionQuery) (*ModuleVersionQuery, error) {
	if p.filter != nil {
		return p.filter(query)
	}
	return query, nil
}

func (p *moduleVersionPager) toCursor(mv *ModuleVersion) Cursor {
	return p.order.Field.toCursor(mv)
}

func (p *moduleVersionPager) applyCursors(query *ModuleVersionQuery, after, before *Cursor) *ModuleVersionQuery {
	for _, predicate := range cursorsToPredicates(
		p.order.Direction, after, before,
		p.order.Field.field, DefaultModuleVersionOrder.Field.field,
	) {
		query = query.Where(predicate)
	}
	return query
}

func (p *moduleVersionPager) applyOrder(query *ModuleVersionQuery, reverse bool) *ModuleVersionQuery {
	direction := p.order.Direction
	if reverse {
		direction = direction.reverse()
	}
	query = query.Order(direction.orderFunc(p.order.Field.field))
	if p.order.Field != DefaultModuleVersionOrder.Field {
		query = query.Order(direction.orderFunc(DefaultModuleVersionOrder.Field.field))
	}
	return query
}

// Paginate executes the query and returns a relay based cursor connection to ModuleVersion.
func (mv *ModuleVersionQuery) Paginate(
	ctx context.Context, after *Cursor, first *int,
	before *Cursor, last *int, opts ...ModuleVersionPaginateOption,
) (*ModuleVersionConnection, error) {
	if err := validateFirstLast(first, last); err != nil {
		return nil, err
	}
	pager, err := newModuleVersionPager(opts)
	if err != nil {
		return nil, err
	}

	if mv, err = pager.applyFilter(mv); err != nil {
		return nil, err
	}

	conn := &ModuleVersionConnection{Edges: []*ModuleVersionEdge{}}
	if !hasCollectedField(ctx, edgesField) || first != nil && *first == 0 || last != nil && *last == 0 {
		if hasCollectedField(ctx, totalCountField) ||
			hasCollectedField(ctx, pageInfoField) {
			count, err := mv.Count(ctx)
			if err != nil {
				return nil, err
			}
			conn.TotalCount = count
			conn.PageInfo.HasNextPage = first != nil && count > 0
			conn.PageInfo.HasPreviousPage = last != nil && count > 0
		}
		return conn, nil
	}

	if (after != nil || first != nil || before != nil || last != nil) && hasCollectedField(ctx, totalCountField) {
		count, err := mv.Clone().Count(ctx)
		if err != nil {
			return nil, err
		}
		conn.TotalCount = count
	}

	mv = pager.applyCursors(mv, after, before)
	mv = pager.applyOrder(mv, last != nil)
	var limit int
	if first != nil {
		limit = *first + 1
	} else if last != nil {
		limit = *last + 1
	}
	if limit > 0 {
		mv = mv.Limit(limit)
	}

	if field := getCollectedField(ctx, edgesField, nodeField); field != nil {
		mv = mv.collectField(graphql.GetOperationContext(ctx), *field)
	}

	nodes, err := mv.All(ctx)
	if err != nil || len(nodes) == 0 {
		return conn, err
	}

	if len(nodes) == limit {
		conn.PageInfo.HasNextPage = first != nil
		conn.PageInfo.HasPreviousPage = last != nil
		nodes = nodes[:len(nodes)-1]
	}

	var nodeAt func(int) *ModuleVersion
	if last != nil {
		n := len(nodes) - 1
		nodeAt = func(i int) *ModuleVersion {
			return nodes[n-i]
		}
	} else {
		nodeAt = func(i int) *ModuleVersion {
			return nodes[i]
		}
	}

	conn.Edges = make([]*ModuleVersionEdge, len(nodes))
	for i := range nodes {
		node := nodeAt(i)
		conn.Edges[i] = &ModuleVersionEdge{
			Node:   node,
			Cursor: pager.toCursor(node),
		}
	}

	conn.PageInfo.StartCursor = &conn.Edges[0].Cursor
	conn.PageInfo.EndCursor = &conn.Edges[len(conn.Edges)-1].Cursor
	if conn.TotalCount == 0 {
		conn.TotalCount = len(nodes)
	}

	return conn, nil
}

// ModuleVersionOrderField defines the ordering field of ModuleVersion.
type ModuleVersionOrderField struct {
	field    string
	toCursor func(*ModuleVersion) Cursor
}

// ModuleVersionOrder defines the ordering of ModuleVersion.
type ModuleVersionOrder struct {
	Direction OrderDirection           `json:"direction"`
	Field     *ModuleVersionOrderField `json:"field"`
}

// DefaultModuleVersionOrder is the default ordering of ModuleVersion.
var DefaultModuleVersionOrder = &ModuleVersionOrder{
	Direction: OrderDirectionAsc,
	Field: &ModuleVersionOrderField{
		field: moduleversion.FieldID,
		toCursor: func(mv *ModuleVersion) Cursor {
			return Cursor{ID: mv.ID}
		},
	},
}

// ToEdge converts ModuleVersion into ModuleVersionEdge.
func (mv *ModuleVersion) ToEdge(order *ModuleVersionOrder) *ModuleVersionEdge {
	if order == nil {
		order = DefaultModuleVersionOrder
	}
	return &ModuleVersionEdge{
		Node:   mv,
		Cursor: order.Field.toCursor(mv),
	}
}
