/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListQuery$ref = any;
export type UserList_entrypoint_QueryVariables = {||};
export type UserList_entrypoint_QueryResponse = {|
  +$fragmentRefs: UserListQuery$ref
|};
export type UserList_entrypoint_Query = {|
  variables: UserList_entrypoint_QueryVariables,
  response: UserList_entrypoint_QueryResponse,
|};
*/


/*
query UserList_entrypoint_Query {
  ...UserListQuery
}

fragment UserListQuery on Query {
  users(first: 10, orderBy: {direction: ASC, field: NAME}) {
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
    "name": "UserList_entrypoint_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserListQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserList_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
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
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
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
        "storageKey": "users(first:10,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [
          "orderBy",
          "where"
        ],
        "handle": "connection",
        "key": "PaginatedUserList_users",
        "kind": "LinkedHandle",
        "name": "users"
      }
    ]
  },
  "params": {
    "cacheID": "94275259f180aaf75e094eb16ba96c2b",
    "id": null,
    "metadata": {},
    "name": "UserList_entrypoint_Query",
    "operationKind": "query",
    "text": "query UserList_entrypoint_Query {\n  ...UserListQuery\n}\n\nfragment UserListQuery on Query {\n  users(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6bdd438a74ec110a7f53dbbd97b529ff';

module.exports = node;
