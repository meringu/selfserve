/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Profile_user$ref = any;
export type Profile_entrypoint_QueryVariables = {||};
export type Profile_entrypoint_QueryResponse = {|
  +user: ?{|
    +$fragmentRefs: Profile_user$ref
  |}
|};
export type Profile_entrypoint_Query = {|
  variables: Profile_entrypoint_QueryVariables,
  response: Profile_entrypoint_QueryResponse,
|};
*/


/*
query Profile_entrypoint_Query {
  user {
    ...Profile_user
    id
  }
}

fragment Profile_user on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Profile_entrypoint_Query",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "Profile_user"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Profile_entrypoint_Query",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bad2bbe2a7feeb4f5f9dcae6e78292e5",
    "id": null,
    "metadata": {},
    "name": "Profile_entrypoint_Query",
    "operationKind": "query",
    "text": "query Profile_entrypoint_Query {\n  user {\n    ...Profile_user\n    id\n  }\n}\n\nfragment Profile_user on User {\n  id\n  name\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '77434f221ef40b9bd9ffca234b3f24ab';

module.exports = node;
