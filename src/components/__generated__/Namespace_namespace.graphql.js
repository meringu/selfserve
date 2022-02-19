/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NamespaceGroups_namespace$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Namespace_namespace$ref: FragmentReference;
declare export opaque type Namespace_namespace$fragmentType: Namespace_namespace$ref;
export type Namespace_namespace = {|
  +id: string,
  +name: string,
  +createdAt: ?any,
  +$fragmentRefs: NamespaceGroups_namespace$ref,
  +$refType: Namespace_namespace$ref,
|};
export type Namespace_namespace$data = Namespace_namespace;
export type Namespace_namespace$key = {
  +$data?: Namespace_namespace$data,
  +$fragmentRefs: Namespace_namespace$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Namespace_namespace",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NamespaceGroups_namespace"
    }
  ],
  "type": "Namespace",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3ed80cf86dac33ae75ee371cacb59ff3';

module.exports = node;
