/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GroupListQuery$ref = any;
export type GroupWhereInput = {|
  not?: ?GroupWhereInput,
  and?: ?$ReadOnlyArray<GroupWhereInput>,
  or?: ?$ReadOnlyArray<GroupWhereInput>,
  name?: ?string,
  nameNEQ?: ?string,
  nameIn?: ?$ReadOnlyArray<string>,
  nameNotIn?: ?$ReadOnlyArray<string>,
  nameGT?: ?string,
  nameGTE?: ?string,
  nameLT?: ?string,
  nameLTE?: ?string,
  nameContains?: ?string,
  nameHasPrefix?: ?string,
  nameHasSuffix?: ?string,
  nameEqualFold?: ?string,
  nameContainsFold?: ?string,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasUsers?: ?boolean,
  hasUsersWith?: ?$ReadOnlyArray<UserWhereInput>,
  hasParent?: ?boolean,
  hasParentWith?: ?$ReadOnlyArray<GroupWhereInput>,
  hasChildren?: ?boolean,
  hasChildrenWith?: ?$ReadOnlyArray<GroupWhereInput>,
  hasNamespaces?: ?boolean,
  hasNamespacesWith?: ?$ReadOnlyArray<NamespaceWhereInput>,
|};
export type UserWhereInput = {|
  not?: ?UserWhereInput,
  and?: ?$ReadOnlyArray<UserWhereInput>,
  or?: ?$ReadOnlyArray<UserWhereInput>,
  name?: ?string,
  nameNEQ?: ?string,
  nameIn?: ?$ReadOnlyArray<string>,
  nameNotIn?: ?$ReadOnlyArray<string>,
  nameGT?: ?string,
  nameGTE?: ?string,
  nameLT?: ?string,
  nameLTE?: ?string,
  nameContains?: ?string,
  nameHasPrefix?: ?string,
  nameHasSuffix?: ?string,
  nameEqualFold?: ?string,
  nameContainsFold?: ?string,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasGroups?: ?boolean,
  hasGroupsWith?: ?$ReadOnlyArray<GroupWhereInput>,
  hasNamespaces?: ?boolean,
  hasNamespacesWith?: ?$ReadOnlyArray<NamespaceWhereInput>,
|};
export type NamespaceWhereInput = {|
  not?: ?NamespaceWhereInput,
  and?: ?$ReadOnlyArray<NamespaceWhereInput>,
  or?: ?$ReadOnlyArray<NamespaceWhereInput>,
  name?: ?string,
  nameNEQ?: ?string,
  nameIn?: ?$ReadOnlyArray<string>,
  nameNotIn?: ?$ReadOnlyArray<string>,
  nameGT?: ?string,
  nameGTE?: ?string,
  nameLT?: ?string,
  nameLTE?: ?string,
  nameContains?: ?string,
  nameHasPrefix?: ?string,
  nameHasSuffix?: ?string,
  nameEqualFold?: ?string,
  nameContainsFold?: ?string,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasGroups?: ?boolean,
  hasGroupsWith?: ?$ReadOnlyArray<GroupWhereInput>,
  hasUsers?: ?boolean,
  hasUsersWith?: ?$ReadOnlyArray<UserWhereInput>,
  hasModules?: ?boolean,
  hasModulesWith?: ?$ReadOnlyArray<ModuleWhereInput>,
  hasInstallations?: ?boolean,
  hasInstallationsWith?: ?$ReadOnlyArray<InstallationWhereInput>,
|};
export type ModuleWhereInput = {|
  not?: ?ModuleWhereInput,
  and?: ?$ReadOnlyArray<ModuleWhereInput>,
  or?: ?$ReadOnlyArray<ModuleWhereInput>,
  name?: ?string,
  nameNEQ?: ?string,
  nameIn?: ?$ReadOnlyArray<string>,
  nameNotIn?: ?$ReadOnlyArray<string>,
  nameGT?: ?string,
  nameGTE?: ?string,
  nameLT?: ?string,
  nameLTE?: ?string,
  nameContains?: ?string,
  nameHasPrefix?: ?string,
  nameHasSuffix?: ?string,
  nameEqualFold?: ?string,
  nameContainsFold?: ?string,
  description?: ?string,
  descriptionNEQ?: ?string,
  descriptionIn?: ?$ReadOnlyArray<string>,
  descriptionNotIn?: ?$ReadOnlyArray<string>,
  descriptionGT?: ?string,
  descriptionGTE?: ?string,
  descriptionLT?: ?string,
  descriptionLTE?: ?string,
  descriptionContains?: ?string,
  descriptionHasPrefix?: ?string,
  descriptionHasSuffix?: ?string,
  descriptionEqualFold?: ?string,
  descriptionContainsFold?: ?string,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasNamespace?: ?boolean,
  hasNamespaceWith?: ?$ReadOnlyArray<NamespaceWhereInput>,
  hasVersions?: ?boolean,
  hasVersionsWith?: ?$ReadOnlyArray<ModuleVersionWhereInput>,
|};
export type ModuleVersionWhereInput = {|
  not?: ?ModuleVersionWhereInput,
  and?: ?$ReadOnlyArray<ModuleVersionWhereInput>,
  or?: ?$ReadOnlyArray<ModuleVersionWhereInput>,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasModule?: ?boolean,
  hasModuleWith?: ?$ReadOnlyArray<ModuleWhereInput>,
  hasInstallations?: ?boolean,
  hasInstallationsWith?: ?$ReadOnlyArray<InstallationWhereInput>,
|};
export type InstallationWhereInput = {|
  not?: ?InstallationWhereInput,
  and?: ?$ReadOnlyArray<InstallationWhereInput>,
  or?: ?$ReadOnlyArray<InstallationWhereInput>,
  createdAt?: ?any,
  createdAtNEQ?: ?any,
  createdAtIn?: ?$ReadOnlyArray<any>,
  createdAtNotIn?: ?$ReadOnlyArray<any>,
  createdAtGT?: ?any,
  createdAtGTE?: ?any,
  createdAtLT?: ?any,
  createdAtLTE?: ?any,
  id?: ?string,
  idNEQ?: ?string,
  idIn?: ?$ReadOnlyArray<string>,
  idNotIn?: ?$ReadOnlyArray<string>,
  idGT?: ?string,
  idGTE?: ?string,
  idLT?: ?string,
  idLTE?: ?string,
  hasModuleVersion?: ?boolean,
  hasModuleVersionWith?: ?$ReadOnlyArray<ModuleVersionWhereInput>,
|};
export type RefetchGroupList_groupsVariables = {|
  after?: ?any,
  first?: ?number,
  where?: ?GroupWhereInput,
|};
export type RefetchGroupList_groupsResponse = {|
  +$fragmentRefs: GroupListQuery$ref
|};
export type RefetchGroupList_groups = {|
  variables: RefetchGroupList_groupsVariables,
  response: RefetchGroupList_groupsResponse,
|};
*/


/*
query RefetchGroupList_groups(
  $after: Cursor
  $first: Int = 10
  $where: GroupWhereInput
) {
  ...GroupListQuery_3sueo6
}

fragment GroupListQuery_3sueo6 on Query {
  groups(first: $first, after: $after, orderBy: {direction: ASC, field: NAME}, where: $where) {
    totalCount
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v3 = {
  "kind": "Variable",
  "name": "where",
  "variableName": "where"
},
v4 = [
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  },
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RefetchGroupList_groups",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "GroupListQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RefetchGroupList_groups",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "GroupConnection",
        "kind": "LinkedField",
        "name": "groups",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "filters": [
          "orderBy",
          "where"
        ],
        "handle": "connection",
        "key": "PaginatedGroupList_groups",
        "kind": "LinkedHandle",
        "name": "groups"
      }
    ]
  },
  "params": {
    "cacheID": "9e236bbb3a576e8d7b1b1df18bc46fbb",
    "id": null,
    "metadata": {},
    "name": "RefetchGroupList_groups",
    "operationKind": "query",
    "text": "query RefetchGroupList_groups(\n  $after: Cursor\n  $first: Int = 10\n  $where: GroupWhereInput\n) {\n  ...GroupListQuery_3sueo6\n}\n\nfragment GroupListQuery_3sueo6 on Query {\n  groups(first: $first, after: $after, orderBy: {direction: ASC, field: NAME}, where: $where) {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06b527b155ad36dc31242814415abb03';

module.exports = node;
