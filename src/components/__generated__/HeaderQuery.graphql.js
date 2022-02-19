/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeaderQuery$ref: FragmentReference;
declare export opaque type HeaderQuery$fragmentType: HeaderQuery$ref;
export type HeaderQuery = {|
  +user: ?{|
    +name: string
  |},
  +$refType: HeaderQuery$ref,
|};
export type HeaderQuery$data = HeaderQuery;
export type HeaderQuery$key = {
  +$data?: HeaderQuery$data,
  +$fragmentRefs: HeaderQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '885b170d46e3f583b45d56519410cf74';

module.exports = node;
