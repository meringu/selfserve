/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeaderQuery$ref = any;
export type RouterQueryVariables = {||};
export type RouterQueryResponse = {|
  +$fragmentRefs: HeaderQuery$ref
|};
export type RouterQuery = {|
  variables: RouterQueryVariables,
  response: RouterQueryResponse,
|};
*/


/*
query RouterQuery {
  ...HeaderQuery
}

fragment HeaderQuery on Query {
  user {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RouterQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HeaderQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RouterQuery",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b31e953be63d099542aa587b3593c6ea",
    "id": null,
    "metadata": {},
    "name": "RouterQuery",
    "operationKind": "query",
    "text": "query RouterQuery {\n  ...HeaderQuery\n}\n\nfragment HeaderQuery on Query {\n  user {\n    name\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '3f64ccfd75e5a6e82a3f940abcd9dc10';

module.exports = node;
