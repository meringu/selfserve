import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

const NamespaceList = React.lazy(() => import('./NamespaceList'))

function entrypoint() {
  const query = useLazyLoadQuery(graphql`
    query NamespaceList_entrypoint_Query {
      ...NamespaceListQuery
    }
  `,
  )

  return <NamespaceList query={query} />
}

export default entrypoint
