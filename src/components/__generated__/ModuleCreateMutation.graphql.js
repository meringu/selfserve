/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ModuleInput = {|
  name?: ?string,
  description?: ?string,
|};
export type ModuleCreateMutationVariables = {|
  input: ModuleInput
|};
export type ModuleCreateMutationResponse = {|
  +createModule: {|
    +id: string
  |}
|};
export type ModuleCreateMutation = {|
  variables: ModuleCreateMutationVariables,
  response: ModuleCreateMutationResponse,
|};
*/


/*
mutation ModuleCreateMutation(
  $input: ModuleInput!
) {
  createModule(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Module",
    "kind": "LinkedField",
    "name": "createModule",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ModuleCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ModuleCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "93cbb60b117be8c3149b9f662da9274e",
    "id": null,
    "metadata": {},
    "name": "ModuleCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ModuleCreateMutation(\n  $input: ModuleInput!\n) {\n  createModule(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35d1f6cc24fab2caece0c1c05c671e0f';

module.exports = node;
