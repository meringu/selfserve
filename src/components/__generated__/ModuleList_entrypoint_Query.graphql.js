/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ModuleListQuery$ref = any;
export type ModuleList_entrypoint_QueryVariables = {||};
export type ModuleList_entrypoint_QueryResponse = {|
  +$fragmentRefs: ModuleListQuery$ref
|};
export type ModuleList_entrypoint_Query = {|
  variables: ModuleList_entrypoint_QueryVariables,
  response: ModuleList_entrypoint_QueryResponse,
|};
*/


/*
query ModuleList_entrypoint_Query {
  ...ModuleListQuery
}

fragment ModuleListQuery on Query {
  modules(first: 10, orderBy: {direction: ASC, field: NAME}) {
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
    "name": "ModuleList_entrypoint_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ModuleListQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ModuleList_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ModuleConnection",
        "kind": "LinkedField",
        "name": "modules",
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
            "concreteType": "ModuleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Module",
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
        "storageKey": "modules(first:10,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [
          "orderBy",
          "where"
        ],
        "handle": "connection",
        "key": "PaginatedModuleList_modules",
        "kind": "LinkedHandle",
        "name": "modules"
      }
    ]
  },
  "params": {
    "cacheID": "76b5e4a7ea2813848398ecde4a21e27b",
    "id": null,
    "metadata": {},
    "name": "ModuleList_entrypoint_Query",
    "operationKind": "query",
    "text": "query ModuleList_entrypoint_Query {\n  ...ModuleListQuery\n}\n\nfragment ModuleListQuery on Query {\n  modules(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98728fbbfcbd632d616d0fb79c09ed70';

module.exports = node;
