import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-relay'

import ResourceList from './ResourceList'

function UserList(props) {
  const query = graphql`
    fragment UserListQuery on Query
      @refetchable(queryName: "RefetchUserList_users")
      @argumentDefinitions(
        first: {type: "Int", defaultValue: 10},
        after: {type: "Cursor", defaultValue: null},
        where: {type: "UserWhereInput", defaultValue: null},
      )
    {
      users(
        first: $first,
        after: $after,
        orderBy: { 
          direction:ASC
          field: NAME
        }
        where: $where,
      ) @connection(key: "PaginatedUserList_users") {
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
        name="User"
        query={query}
        queryRef={props.query}
        getConnection={data => data.users}
        pageSize={10}
      />
    </Container>
  )
}

UserList.propTypes = {
  query: PropTypes.object.isRequired,
}

export default UserList
