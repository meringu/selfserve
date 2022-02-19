import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'

const Namespace = React.lazy(() => import('./Namespace'))

function entrypoint() {
  const { id } = useParams()

  const data = useLazyLoadQuery(graphql`
    query Namespace_entrypoint_Query($id: ID!) {
      namespace(id: $id) {
        ...Namespace_namespace
      }
    }
  `,
  { id: id },
  )

  return <Namespace namespace={data.namespace} />
}

export default entrypoint
