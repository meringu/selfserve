import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

const ModuleList = React.lazy(() => import('./ModuleList'))

function entrypoint() {
  const query = useLazyLoadQuery(graphql`
    query ModuleList_entrypoint_Query {
      ...ModuleListQuery
    }
  `,
  )

  return <ModuleList query={query} />
}

export default entrypoint
