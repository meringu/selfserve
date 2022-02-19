import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useFragment } from 'react-relay'

import AddGroupToNamespaceButton from './AddGroupToNamespaceButton'

function Namespace(props) {
  const namespace = useFragment(graphql`
    fragment NamespaceGroups_namespace on Namespace @refetchable(queryName: "RefetchNamespaceGroups_namespace") {
      ...AddGroupToNamespaceButtonQuery_namespace

      groups {
        edges {
          node {
            id
            name
            createdAt
          }
        }
      }
    }
  `, props.namespace)

  const { groups } = namespace

  return (
    <>
      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', pr: 2, mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography color="text.primary">Groups</Typography>
          </Box>
          <AddGroupToNamespaceButton namespace={namespace} />
        </Box>
      </div>

      <TableContainer>
        <Table aria-label="namespace groups table">
          <TableBody>
            {groups.edges.map(edge => edge.node).map(group => (
              <TableRow key={group.id}>
                <TableCell component="th" scope="row" style={{ borderBottom: 'none'}}>
                  {group.name}
                </TableCell>
                <TableCell component="th" scope="row" style={{ borderBottom: 'none'}}>
                  {group.createdAt}
                </TableCell> 
              </TableRow>
            ))}
            {groups.edges.length === 0 &&
              <TableRow>
                <TableCell component="th" scope="row" style={{ borderBottom: 'none'}}>
                  No groups
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

Namespace.propTypes = {
  namespace: PropTypes.object.isRequired,
}

export default Namespace
