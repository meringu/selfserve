/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ModuleVersionQuery$ref = any;
export type RefetchModuleVersionQueryVariables = {|
  id: string
|};
export type RefetchModuleVersionQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: ModuleVersionQuery$ref
  |}
|};
export type RefetchModuleVersionQuery = {|
  variables: RefetchModuleVersionQueryVariables,
  response: RefetchModuleVersionQueryResponse,
|};
*/


/*
query RefetchModuleVersionQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ModuleVersionQuery
    id
  }
}

fragment ModuleVersionQuery on ModuleVersion {
  id
  variables {
    name
    description
    sensitive
    type
    default
  }
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RefetchModuleVersionQuery",
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
            "name": "ModuleVersionQuery"
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
    "name": "RefetchModuleVersionQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ModuleVersionVariable",
                "kind": "LinkedField",
                "name": "variables",
                "plural": true,
                "selections": [
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
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sensitive",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "default",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "ModuleVersion",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "774a56d530164257afcd25d8006c8095",
    "id": null,
    "metadata": {},
    "name": "RefetchModuleVersionQuery",
    "operationKind": "query",
    "text": "query RefetchModuleVersionQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ModuleVersionQuery\n    id\n  }\n}\n\nfragment ModuleVersionQuery on ModuleVersion {\n  id\n  variables {\n    name\n    description\n    sensitive\n    type\n    default\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7f01e5b88877219164bdb36d0553a0a0';

module.exports = node;
