/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddGroupToNamespaceButtonQuery_namespace$ref: FragmentReference;
declare export opaque type AddGroupToNamespaceButtonQuery_namespace$fragmentType: AddGroupToNamespaceButtonQuery_namespace$ref;
export type AddGroupToNamespaceButtonQuery_namespace = {|
  +id: string,
  +notGroups: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |},
  +$refType: AddGroupToNamespaceButtonQuery_namespace$ref,
|};
export type AddGroupToNamespaceButtonQuery_namespace$data = AddGroupToNamespaceButtonQuery_namespace;
export type AddGroupToNamespaceButtonQuery_namespace$key = {
  +$data?: AddGroupToNamespaceButtonQuery_namespace$data,
  +$fragmentRefs: AddGroupToNamespaceButtonQuery_namespace$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "notGroups"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "where"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RefetchAddGroupToNamespaceButtonQuery_namespace.graphql'),
      "identifierField": "id"
    }
  },
  "name": "AddGroupToNamespaceButtonQuery_namespace",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "notGroups",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "ASC",
            "field": "NAME"
          }
        },
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "GroupConnection",
      "kind": "LinkedField",
      "name": "__PaginatedAddGroupToNamespace__namespace_notGroups_connection",
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
                (v1/*: any*/),
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
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Namespace",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '73ed87d0f00ee6398a1261c2e5ca7cac';

module.exports = node;
