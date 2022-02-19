/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Profile_user$ref: FragmentReference;
declare export opaque type Profile_user$fragmentType: Profile_user$ref;
export type Profile_user = {|
  +id: string,
  +name: string,
  +$refType: Profile_user$ref,
|};
export type Profile_user$data = Profile_user;
export type Profile_user$key = {
  +$data?: Profile_user$data,
  +$fragmentRefs: Profile_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Profile_user",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '9cd6b9299316f059d0bf3be861061949';

module.exports = node;
