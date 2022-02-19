import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'

const Module = React.lazy(() => import('./Module'))

function entrypoint() {
  const { id } = useParams()

  const data = useLazyLoadQuery(graphql`
    query Module_entrypoint_Query($id: ID!) {
      module(id: $id) {
        ...Module_module
      }
    }
  `,
  { id: id },
  )

  return <Module module={data.module} />
}

export default entrypoint
