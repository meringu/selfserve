/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_group$ref = any;
export type Group_entrypoint_QueryVariables = {|
  id: string
|};
export type Group_entrypoint_QueryResponse = {|
  +group: ?{|
    +$fragmentRefs: Group_group$ref
  |}
|};
export type Group_entrypoint_Query = {|
  variables: Group_entrypoint_QueryVariables,
  response: Group_entrypoint_QueryResponse,
|};
*/


/*
query Group_entrypoint_Query(
  $id: ID!
) {
  group(id: $id) {
    ...Group_group
    id
  }
}

fragment Group_group on Group {
  id
  name
  createdAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Group_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Group_group"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Group_entrypoint_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "692c21f98817b9548dfa07732ff175a6",
    "id": null,
    "metadata": {},
    "name": "Group_entrypoint_Query",
    "operationKind": "query",
    "text": "query Group_entrypoint_Query(\n  $id: ID!\n) {\n  group(id: $id) {\n    ...Group_group\n    id\n  }\n}\n\nfragment Group_group on Group {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f8ff00f3ca65a57268569d2026eace4';

module.exports = node;
