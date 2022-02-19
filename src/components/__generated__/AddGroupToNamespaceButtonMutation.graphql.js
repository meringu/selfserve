/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddGroupToNamespaceButtonQuery_namespace$ref = any;
export type AddGroupToNamespaceButtonMutationVariables = {|
  namespaceId: string,
  groupId: string,
|};
export type AddGroupToNamespaceButtonMutationResponse = {|
  +updateNamespace: {|
    +groups: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +createdAt: ?any,
        |}
      |}>
    |},
    +$fragmentRefs: AddGroupToNamespaceButtonQuery_namespace$ref,
  |}
|};
export type AddGroupToNamespaceButtonMutation = {|
  variables: AddGroupToNamespaceButtonMutationVariables,
  response: AddGroupToNamespaceButtonMutationResponse,
|};
*/


/*
mutation AddGroupToNamespaceButtonMutation(
  $namespaceId: ID!
  $groupId: ID!
) {
  updateNamespace(id: $namespaceId, input: {addGroups: [$groupId]}) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "groupId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "namespaceId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "namespaceId"
  },
  {
    "fields": [
      {
        "items": [
          {
            "kind": "Variable",
            "name": "addGroups.0",
            "variableName": "groupId"
          }
        ],
        "kind": "ListValue",
        "name": "addGroups"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
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
            (v4/*: any*/),
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
},
v6 = [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddGroupToNamespaceButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Namespace",
        "kind": "LinkedField",
        "name": "updateNamespace",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AddGroupToNamespaceButtonQuery_namespace"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddGroupToNamespaceButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Namespace",
        "kind": "LinkedField",
        "name": "updateNamespace",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
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
                      (v4/*: any*/),
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
            "args": (v6/*: any*/),
            "filters": [
              "where",
              "orderBy"
            ],
            "handle": "connection",
            "key": "PaginatedAddGroupToNamespace__namespace_notGroups",
            "kind": "LinkedHandle",
            "name": "notGroups"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a104b4368f196117fa3b684696d02c06",
    "id": null,
    "metadata": {},
    "name": "AddGroupToNamespaceButtonMutation",
    "operationKind": "mutation",
    "text": "mutation AddGroupToNamespaceButtonMutation(\n  $namespaceId: ID!\n  $groupId: ID!\n) {\n  updateNamespace(id: $namespaceId, input: {addGroups: [$groupId]}) {\n    ...AddGroupToNamespaceButtonQuery_namespace\n    groups {\n      edges {\n        node {\n          id\n          name\n          createdAt\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment AddGroupToNamespaceButtonQuery_namespace on Namespace {\n  id\n  notGroups(first: 10, orderBy: {direction: ASC, field: NAME}) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd48a35fe7936da8c47950644244c026d';

module.exports = node;
