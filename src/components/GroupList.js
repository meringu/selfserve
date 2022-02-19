import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-relay'

import ResourceList from './ResourceList'

function GroupList(props) {
  const query = graphql`
    fragment GroupListQuery on Query
      @refetchable(queryName: "RefetchGroupList_groups")
      @argumentDefinitions(
        first: {type: "Int", defaultValue: 10},
        after: {type: "Cursor", defaultValue: null},
        where: {type: "GroupWhereInput", defaultValue: null},
      )
    {
      groups(
        first: $first,
        after: $after,
        orderBy: { 
          direction:ASC
          field: NAME
        },
        where: $where,
      ) @connection(key: "PaginatedGroupList_groups") {
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
        name="Group"
        query={query}
        queryRef={props.query}
        getConnection={data => data.groups}
        pageSize={10}
      />
    </Container>
  )
}

GroupList.propTypes = {
  query: PropTypes.object.isRequired,
}

export default GroupList
