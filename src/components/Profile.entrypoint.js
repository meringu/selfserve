import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

const Profile = React.lazy(() => import('./Profile'))

const Profile_entrypoint_Query = graphql`
  query Profile_entrypoint_Query {
    user {
      ...Profile_user
    }
  }
`

function entrypoint() {
  const data = useLazyLoadQuery(Profile_entrypoint_Query)

  return <Profile user={data.user} />
}

entrypoint.props = {}

export default entrypoint
