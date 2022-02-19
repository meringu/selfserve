/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NamespaceListQuery$ref = any;
export type NamespaceList_entrypoint_QueryVariables = {||};
export type NamespaceList_entrypoint_QueryResponse = {|
  +$fragmentRefs: NamespaceListQuery$ref
|};
export type NamespaceList_entrypoint_Query = {|
  variables: NamespaceList_entrypoint_QueryVariables,
  response: NamespaceList_entrypoint_QueryResponse,
|};
*/


/*
query NamespaceList_entrypoint_Query {
  ...NamespaceListQuery
}

fragment NamespaceListQuery on Query {
  namespaces(first: 10, orderBy: {direction: ASC, field: NAME}) {
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NamespaceList_entrypoint_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NamespaceListQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NamespaceList_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "NamespaceConnection",
        "kind": "LinkedField",
        "name": "namespaces",
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
            "concreteType": "NamespaceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Namespace",
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
        "storageKey": "namespaces(first:10,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [
          "orderBy",
          "where"
        ],
        "handle": "connection",
        "key": "PaginatedNamespaceList_namespaces",
        "kind": "LinkedHandle",
        "name": "namespaces"
      }
    ]
  },
  "params": {
    "cacheID": "1ed41d3de7acd41cc2b0986fe3594e22",
    "id": null,
    "metadata": {},
    "name": "NamespaceList_entrypoint_Query",
    "operationKind": "query",
    "text": "query NamespaceList_entrypoint_Query {\n  ...NamespaceListQuery\n}\n\nfragment NamespaceListQuery on Query {\n  namespaces(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a680bbb227d4211f6a24b7a617e85769';

module.exports = node;
