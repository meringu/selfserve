import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-relay'

import ResourceList from './ResourceList'

function NamespaceList(props) {
  const query = graphql`
    fragment NamespaceListQuery on Query
      @refetchable(queryName: "RefetchNamespaceList_namespaces")
      @argumentDefinitions(
        first: {type: "Int", defaultValue: 10},
        after: {type: "Cursor", defaultValue: null},
        where: {type: "NamespaceWhereInput", defaultValue: null},
      )
    {
      namespaces(
        first: $first,
        after: $after,
        orderBy: { 
          direction:ASC
          field: NAME
        }
        where: $where,
      ) @connection(key: "PaginatedNamespaceList_namespaces") {
        totalCount
        edges  {
          node {
            id
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `

  return (
    <Container>
      <ResourceList
        name="Namespace"
        query={query}
        queryRef={props.query}
        getConnection={data => data.namespaces}
        pageSize={10}
      />
    </Container>
  )
}

NamespaceList.propTypes = {
  query: PropTypes.object.isRequired,
}

export default NamespaceList
