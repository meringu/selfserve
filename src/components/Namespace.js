import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router-dom'

import NamespaceGroups from './NamespaceGroups'

function Namespace(props) {
  const namespace = useFragment(graphql`
    fragment Namespace_namespace on Namespace {
      id
      name
      createdAt

      ...NamespaceGroups_namespace
    }
  `, props.namespace)

  const { name, createdAt } = namespace

  return (
    <Container>
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/namespaces">
            <Typography color="text.primary">Namespaces</Typography>
          </Link>
          <Typography color="text.primary">{name}</Typography>
        </Breadcrumbs>
      </Box>

      <Box mb={2}>
        Created at: {new Date(createdAt).toString()}
      </Box>

      <Box mb={2}>
        <NamespaceGroups namespace={namespace} />
      </Box>
    </Container>
  )
}

Namespace.propTypes = {
  namespace: PropTypes.object.isRequired,
}

export default Namespace
