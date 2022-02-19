/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Module_module$ref = any;
export type Module_entrypoint_QueryVariables = {|
  id: string
|};
export type Module_entrypoint_QueryResponse = {|
  +module: ?{|
    +$fragmentRefs: Module_module$ref
  |}
|};
export type Module_entrypoint_Query = {|
  variables: Module_entrypoint_QueryVariables,
  response: Module_entrypoint_QueryResponse,
|};
*/


/*
query Module_entrypoint_Query(
  $id: ID!
) {
  module(id: $id) {
    ...Module_module
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

fragment Module_module on Module {
  id
  name
  createdAt
  latestVersion {
    createdAt
    ...ModuleVersionQuery
    id
  }
  versions {
    totalCount
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Module_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Module",
        "kind": "LinkedField",
        "name": "module",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Module_module"
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
    "name": "Module_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Module",
        "kind": "LinkedField",
        "name": "module",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ModuleVersion",
            "kind": "LinkedField",
            "name": "latestVersion",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ModuleVersionVariable",
                "kind": "LinkedField",
                "name": "variables",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ModuleVersionConnection",
            "kind": "LinkedField",
            "name": "versions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
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
    "cacheID": "c40512806a9a7f0a897cbaffa53f8a6f",
    "id": null,
    "metadata": {},
    "name": "Module_entrypoint_Query",
    "operationKind": "query",
    "text": "query Module_entrypoint_Query(\n  $id: ID!\n) {\n  module(id: $id) {\n    ...Module_module\n    id\n  }\n}\n\nfragment ModuleVersionQuery on ModuleVersion {\n  id\n  variables {\n    name\n    description\n    sensitive\n    type\n    default\n  }\n}\n\nfragment Module_module on Module {\n  id\n  name\n  createdAt\n  latestVersion {\n    createdAt\n    ...ModuleVersionQuery\n    id\n  }\n  versions {\n    totalCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '002525ad29d9fd7c74a2c0c10698b3da';

module.exports = node;
