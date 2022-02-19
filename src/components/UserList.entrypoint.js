import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

const UserList = React.lazy(() => import('./UserList'))

function entrypoint() {
  const query = useLazyLoadQuery(graphql`
    query UserList_entrypoint_Query {
      ...UserListQuery
    }
  `,
  )

  return <UserList query={query} />
}

export default entrypoint
