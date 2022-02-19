/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddGroupToNamespaceButtonQuery_namespace$ref = any;
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
export type RefetchAddGroupToNamespaceButtonQuery_namespaceVariables = {|
  after?: ?any,
  first?: ?number,
  where?: ?GroupWhereInput,
  id: string,
|};
export type RefetchAddGroupToNamespaceButtonQuery_namespaceResponse = {|
  +node: ?{|
    +$fragmentRefs: AddGroupToNamespaceButtonQuery_namespace$ref
  |}
|};
export type RefetchAddGroupToNamespaceButtonQuery_namespace = {|
  variables: RefetchAddGroupToNamespaceButtonQuery_namespaceVariables,
  response: RefetchAddGroupToNamespaceButtonQuery_namespaceResponse,
|};
*/


/*
query RefetchAddGroupToNamespaceButtonQuery_namespace(
  $after: Cursor
  $first: Int = 10
  $where: GroupWhereInput
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...AddGroupToNamespaceButtonQuery_namespace_3sueo6
    id
  }
}

fragment AddGroupToNamespaceButtonQuery_namespace_3sueo6 on Namespace {
  id
  notGroups(first: $first, after: $after, where: $where, orderBy: {direction: ASC, field: NAME}) {
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": 10,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "where"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v6 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v7 = {
  "kind": "Variable",
  "name": "where",
  "variableName": "where"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  },
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RefetchAddGroupToNamespaceButtonQuery_namespace",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "AddGroupToNamespaceButtonQuery_namespace"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RefetchAddGroupToNamespaceButtonQuery_namespace",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "GroupConnection",
                "kind": "LinkedField",
                "name": "notGroups",
                "plural": false,
                "selections": [
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v8/*: any*/)
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
                "args": (v10/*: any*/),
                "filters": [
                  "where",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "PaginatedAddGroupToNamespace__namespace_notGroups",
                "kind": "LinkedHandle",
                "name": "notGroups"
              }
            ],
            "type": "Namespace",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "399c0fc96a4d89ac2c61e6a91b5314cc",
    "id": null,
    "metadata": {},
    "name": "RefetchAddGroupToNamespaceButtonQuery_namespace",
    "operationKind": "query",
    "text": "query RefetchAddGroupToNamespaceButtonQuery_namespace(\n  $after: Cursor\n  $first: Int = 10\n  $where: GroupWhereInput\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...AddGroupToNamespaceButtonQuery_namespace_3sueo6\n    id\n  }\n}\n\nfragment AddGroupToNamespaceButtonQuery_namespace_3sueo6 on Namespace {\n  id\n  notGroups(first: $first, after: $after, where: $where, orderBy: {direction: ASC, field: NAME}) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '73ed87d0f00ee6398a1261c2e5ca7cac';

module.exports = node;
