/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NamespaceGroups_namespace$ref = any;
export type RefetchNamespaceGroups_namespaceVariables = {|
  id: string
|};
export type RefetchNamespaceGroups_namespaceResponse = {|
  +node: ?{|
    +$fragmentRefs: NamespaceGroups_namespace$ref
  |}
|};
export type RefetchNamespaceGroups_namespace = {|
  variables: RefetchNamespaceGroups_namespaceVariables,
  response: RefetchNamespaceGroups_namespaceResponse,
|};
*/


/*
query RefetchNamespaceGroups_namespace(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...NamespaceGroups_namespace
    id
  }
}

fragment AddGroupToNamespaceButtonQuery_namespace on Namespace {
  id
  notGroups(first: 10, orderBy: {direction: ASC, field: NAME}) {
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

fragment NamespaceGroups_namespace on Namespace {
  ...AddGroupToNamespaceButtonQuery_namespace
  groups {
    edges {
      node {
        id
        name
        createdAt
      }
    }
  }
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RefetchNamespaceGroups_namespace",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NamespaceGroups_namespace"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RefetchNamespaceGroups_namespace",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                          (v3/*: any*/),
                          (v5/*: any*/),
                          (v2/*: any*/)
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
                "storageKey": "notGroups(first:10,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": [
                  "where",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "PaginatedAddGroupToNamespace__namespace_notGroups",
                "kind": "LinkedHandle",
                "name": "notGroups"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupConnection",
                "kind": "LinkedField",
                "name": "groups",
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
                          (v3/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "6966384265b006f0fb8db9e937903551",
    "id": null,
    "metadata": {},
    "name": "RefetchNamespaceGroups_namespace",
    "operationKind": "query",
    "text": "query RefetchNamespaceGroups_namespace(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...NamespaceGroups_namespace\n    id\n  }\n}\n\nfragment AddGroupToNamespaceButtonQuery_namespace on Namespace {\n  id\n  notGroups(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NamespaceGroups_namespace on Namespace {\n  ...AddGroupToNamespaceButtonQuery_namespace\n  groups {\n    edges {\n      node {\n        id\n        name\n        createdAt\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46047c05b7ae0acad0bd291e5d413d40';

module.exports = node;
