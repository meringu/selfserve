import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router-dom'

function Group(props) {
  const group = useFragment(graphql`
    fragment Group_group on Group {
      id
      name
      createdAt
    }
  `, props.group)

  const { name, createdAt } = group

  return (
    <Container>
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/groups">
            <Typography color="text.primary">Groups</Typography>
          </Link>
          <Typography color="text.primary">{name}</Typography>
        </Breadcrumbs>
      </Box>

      <Box mb={2}>
        Created at: {new Date(createdAt).toString()}
      </Box>
    </Container>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
}

export default Group
