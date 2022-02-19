/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Namespace_namespace$ref = any;
export type Namespace_entrypoint_QueryVariables = {|
  id: string
|};
export type Namespace_entrypoint_QueryResponse = {|
  +namespace: ?{|
    +$fragmentRefs: Namespace_namespace$ref
  |}
|};
export type Namespace_entrypoint_Query = {|
  variables: Namespace_entrypoint_QueryVariables,
  response: Namespace_entrypoint_QueryResponse,
|};
*/


/*
query Namespace_entrypoint_Query(
  $id: ID!
) {
  namespace(id: $id) {
    ...Namespace_namespace
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

fragment Namespace_namespace on Namespace {
  id
  name
  createdAt
  ...NamespaceGroups_namespace
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Namespace_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Namespace",
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Namespace_namespace"
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
    "name": "Namespace_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Namespace",
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                      (v2/*: any*/),
                      (v3/*: any*/),
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
            "storageKey": "notGroups(first:10,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8bbf830fe90bb5fbcc3988aa520878c5",
    "id": null,
    "metadata": {},
    "name": "Namespace_entrypoint_Query",
    "operationKind": "query",
    "text": "query Namespace_entrypoint_Query(\n  $id: ID!\n) {\n  namespace(id: $id) {\n    ...Namespace_namespace\n    id\n  }\n}\n\nfragment AddGroupToNamespaceButtonQuery_namespace on Namespace {\n  id\n  notGroups(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NamespaceGroups_namespace on Namespace {\n  ...AddGroupToNamespaceButtonQuery_namespace\n  groups {\n    edges {\n      node {\n        id\n        name\n        createdAt\n      }\n    }\n  }\n  id\n}\n\nfragment Namespace_namespace on Namespace {\n  id\n  name\n  createdAt\n  ...NamespaceGroups_namespace\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '241284db7aaa2b515e1bf001e682ba4b';

module.exports = node;
