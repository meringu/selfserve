import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'

const Group = React.lazy(() => import('./Group'))

function entrypoint() {
  const { id } = useParams()

  const data = useLazyLoadQuery(graphql`
    query Group_entrypoint_Query($id: ID!) {
      group(id: $id) {
        ...Group_group
      }
    }
  `,
  { id: id },
  )

  return <Group group={data.group} />
}

export default entrypoint
