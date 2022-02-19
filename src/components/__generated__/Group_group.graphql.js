/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Group_group$ref: FragmentReference;
declare export opaque type Group_group$fragmentType: Group_group$ref;
export type Group_group = {|
  +id: string,
  +name: string,
  +createdAt: ?any,
  +$refType: Group_group$ref,
|};
export type Group_group$data = Group_group;
export type Group_group$key = {
  +$data?: Group_group$data,
  +$fragmentRefs: Group_group$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Group_group",
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
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e1f9f43299f0eb39bd321bba772f5c71';

module.exports = node;
