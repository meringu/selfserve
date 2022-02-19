import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-relay'

import ResourceList from './ResourceList'

function ModuleList(props) {
  const query = graphql`
    fragment ModuleListQuery on Query
      @refetchable(queryName: "RefetchModuleList_modules")
      @argumentDefinitions(
        first: {type: "Int", defaultValue: 10},
        after: {type: "Cursor", defaultValue: null},
        where: {type: "ModuleWhereInput", defaultValue: null},
      )
    {
      modules(
        first: $first,
        after: $after,
        orderBy: { 
          direction:ASC
          field: NAME
        }
        where: $where,
      ) @connection(key: "PaginatedModuleList_modules") {
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
        name="Module"
        query={query}
        queryRef={props.query}
        getConnection={data => data.modules}
        pageSize={10}
      />
    </Container>
  )
}

ModuleList.propTypes = {
  query: PropTypes.object.isRequired,
}

export default ModuleList
