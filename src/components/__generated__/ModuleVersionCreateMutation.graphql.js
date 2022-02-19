/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ModuleVersionQuery$ref = any;
export type ModuleVersionInput = {|
  variables?: ?string
|};
export type ModuleVersionCreateMutationVariables = {|
  module: string,
  input: ModuleVersionInput,
|};
export type ModuleVersionCreateMutationResponse = {|
  +createModuleVersion: {|
    +module: {|
      +latestVersion: ?{|
        +id: string
      |}
    |},
    +$fragmentRefs: ModuleVersionQuery$ref,
  |}
|};
export type ModuleVersionCreateMutation = {|
  variables: ModuleVersionCreateMutationVariables,
  response: ModuleVersionCreateMutationResponse,
|};
*/


/*
mutation ModuleVersionCreateMutation(
  $module: ID!
  $input: ModuleVersionInput!
) {
  createModuleVersion(module: $module, input: $input) {
    ...ModuleVersionQuery
    module {
      latestVersion {
        id
      }
      id
    }
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "module"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  },
  {
    "kind": "Variable",
    "name": "module",
    "variableName": "module"
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
  "concreteType": "ModuleVersion",
  "kind": "LinkedField",
  "name": "latestVersion",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ModuleVersionCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ModuleVersion",
        "kind": "LinkedField",
        "name": "createModuleVersion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Module",
            "kind": "LinkedField",
            "name": "module",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ModuleVersionQuery"
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
    "name": "ModuleVersionCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ModuleVersion",
        "kind": "LinkedField",
        "name": "createModuleVersion",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Module",
            "kind": "LinkedField",
            "name": "module",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "871056f85d9224250d528d6f024578f9",
    "id": null,
    "metadata": {},
    "name": "ModuleVersionCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ModuleVersionCreateMutation(\n  $module: ID!\n  $input: ModuleVersionInput!\n) {\n  createModuleVersion(module: $module, input: $input) {\n    ...ModuleVersionQuery\n    module {\n      latestVersion {\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment ModuleVersionQuery on ModuleVersion {\n  id\n  variables {\n    name\n    description\n    sensitive\n    type\n    default\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1e8559db8585f109064123f97faa125';

module.exports = node;
