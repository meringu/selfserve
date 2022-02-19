/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type ModuleVersionVariableType = "BOOL" | "INTEGER" | "NUMBER" | "STRING" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type ModuleVersionQuery$ref: FragmentReference;
declare export opaque type ModuleVersionQuery$fragmentType: ModuleVersionQuery$ref;
export type ModuleVersionQuery = {|
  +id: string,
  +variables: ?$ReadOnlyArray<?{|
    +name: string,
    +description: ?string,
    +sensitive: ?boolean,
    +type: ModuleVersionVariableType,
    +default: ?string,
  |}>,
  +$refType: ModuleVersionQuery$ref,
|};
export type ModuleVersionQuery$data = ModuleVersionQuery;
export type ModuleVersionQuery$key = {
  +$data?: ModuleVersionQuery$data,
  +$fragmentRefs: ModuleVersionQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RefetchModuleVersionQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ModuleVersionQuery",
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
};
// prettier-ignore
(node/*: any*/).hash = '7f01e5b88877219164bdb36d0553a0a0';

module.exports = node;
