/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ModuleVersionQuery$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Module_module$ref: FragmentReference;
declare export opaque type Module_module$fragmentType: Module_module$ref;
export type Module_module = {|
  +id: string,
  +name: string,
  +createdAt: ?any,
  +latestVersion: ?{|
    +createdAt: any,
    +$fragmentRefs: ModuleVersionQuery$ref,
  |},
  +versions: {|
    +totalCount: number
  |},
  +$refType: Module_module$ref,
|};
export type Module_module$data = Module_module;
export type Module_module$key = {
  +$data?: Module_module$data,
  +$fragmentRefs: Module_module$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Module_module",
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ModuleVersion",
      "kind": "LinkedField",
      "name": "latestVersion",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModuleVersionQuery"
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
  "type": "Module",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '493aa71491338bf58b73d36b0d83ffd7';

module.exports = node;
