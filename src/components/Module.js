import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router-dom'

import ModuleVersion from './ModuleVersion'

function Module(props) {
  const module = useFragment(graphql`
    fragment Module_module on Module {
      id
      name
      createdAt

      latestVersion {
        createdAt
        ...ModuleVersionQuery
      }

      versions {
        totalCount
      }
    }
  `, props.module)

  const { id, name, createdAt, latestVersion, versions } = module

  return (
    <Container>
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/modules">
            <Typography color="text.primary">Modules</Typography>
          </Link>
          <Typography color="text.primary">{name}</Typography>
        </Breadcrumbs>
      </Box>

      <Box mb={2}>
        Created at: {new Date(latestVersion.createdAt).toString()}
      </Box>

      <Box mb={2}>
        Total Versions: {versions.totalCount}
      </Box>

      <Box mb={2}>
        Latest Version Created at: {new Date(createdAt).toString()}
      </Box>

      <Box mb={2}>
        <ModuleVersion moduleId={id} version={latestVersion} />
      </Box>
    </Container>
  )
}

Module.propTypes = {
  module: PropTypes.object.isRequired,
}

export default Module
