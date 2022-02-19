import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

const GroupList = React.lazy(() => import('./GroupList'))

function entrypoint() {
  const query = useLazyLoadQuery(graphql`
    query GroupList_entrypoint_Query {
      ...GroupListQuery
    }
  `,
  )

  return <GroupList query={query} />
}

export default entrypoint
