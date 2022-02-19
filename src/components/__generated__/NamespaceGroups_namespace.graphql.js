/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AddGroupToNamespaceButtonQuery_namespace$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NamespaceGroups_namespace$ref: FragmentReference;
declare export opaque type NamespaceGroups_namespace$fragmentType: NamespaceGroups_namespace$ref;
export type NamespaceGroups_namespace = {|
  +groups: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +createdAt: ?any,
      |}
    |}>
  |},
  +id: string,
  +$fragmentRefs: AddGroupToNamespaceButtonQuery_namespace$ref,
  +$refType: NamespaceGroups_namespace$ref,
|};
export type NamespaceGroups_namespace$data = NamespaceGroups_namespace;
export type NamespaceGroups_namespace$key = {
  +$data?: NamespaceGroups_namespace$data,
  +$fragmentRefs: NamespaceGroups_namespace$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RefetchNamespaceGroups_namespace.graphql'),
      "identifierField": "id"
    }
  },
  "name": "NamespaceGroups_namespace",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GroupConnection",
      "kind": "LinkedField",
      "name": "groups",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GroupEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Group",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AddGroupToNamespaceButtonQuery_namespace"
    }
  ],
  "type": "Namespace",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '46047c05b7ae0acad0bd291e5d413d40';

module.exports = node;
