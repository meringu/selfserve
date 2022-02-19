import {Environment, Network, RecordSource, Store} from 'relay-runtime'

async function fetchRelay(params, variables) {
  return await fetch('/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then(response => response.json())
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
