import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Fab from '@mui/material/Fab'
import InputAdornment from '@mui/material/InputAdornment'
import Popover from '@mui/material/Popover'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import {
  graphql,
  useMutation,
  usePaginationFragment,
} from 'react-relay'
import { useHistory } from 'react-router-dom'

function LoadingTable() {
  return (
    <TableContainer>
      <Table aria-label="namespace table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" style={{ borderBottom: 'none'}}>
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress />
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function GroupsTable(props) {
  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(graphql`
    fragment AddGroupToNamespaceButtonQuery_namespace on Namespace
      @refetchable(
        queryName: "RefetchAddGroupToNamespaceButtonQuery_namespace"
      )
      @argumentDefinitions(
        first: {type: "Int", defaultValue: 10},
        after: {type: "Cursor", defaultValue: null},
        where: {type: "GroupWhereInput", defaultValue: null},
      )
    {
      id
      notGroups(
        first: $first,
        after: $after,
        where: $where,
        orderBy: { 
          direction:ASC
          field: NAME
        }
      )
        @connection(key: "PaginatedAddGroupToNamespace__namespace_notGroups")
      {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `, props.namespace)

  const [commit] = useMutation(graphql`
    mutation AddGroupToNamespaceButtonMutation($namespaceId: ID!, $groupId: ID!) {
      updateNamespace(id: $namespaceId, input: { addGroups: [$groupId] }) {
        # The list of groups that can be added is updated
        ...AddGroupToNamespaceButtonQuery_namespace

        # Ensures any component that is showing all groups on a namespace is updated
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
    }
  `)

  const [committing, setCommitting] = useState(new Set())

  function handleCommit(e) {
    const id = e.target.id
    setCommitting(prev => new Set(prev.add(id)))
    commit({
      variables: { namespaceId: data.id, groupId: id },
      onCompleted: () => setCommitting(prev => new Set([...prev].filter(i => i !== id))),
      onError: () => setCommitting(prev => new Set([...prev].filter(i => i !== id))),
      updater(store) { 
        const ns = store.get(data.id)
        console.log(ns)
        if (ns !== null) ns.invalidateRecord()
      },
    })
  }

  useEffect(() => {
    if (props.searchTerm !== undefined) {
      if (props.searchTerm === '') refetch({})
      else refetch({ where: { nameContains: props.searchTerm }})
    }
  }, [props.searchTerm, refetch])

  const groups = data.notGroups.edges.map(edge => edge.node)

  const history = useHistory()

  return (
    <TableContainer>
      <Table aria-label="namespace table">
        <TableBody>
          {groups.map((group, i) => (
            <TableRow key={group.id} style={{cursor: 'pointer'}}>
              <TableCell component="th" scope="row" style={i === groups.length - 1 ? { borderBottom: 'none' } : null}>
                {group.name}
              </TableCell>
              <TableCell component="th" scope="row" style={i === groups.length - 1 ? { borderBottom: 'none' } : null}>
                <Button onClick={handleCommit} disabled={committing.has(group.id)}>
                  {committing.has(group.id) ? <CircularProgress size={20} /> : <AddIcon id={group.id} />}
                </Button>
                <Button onClick={() => history.push(`/groups/${group.id}`)}>
                  <EditIcon id={group.id} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {groups.length === 0 && 'No groups found'}
          {isLoadingNext
            ? (
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress />
              </Box>
            )
            : hasNext && (
              <TableRow>
                <TableCell component="th" scope="row" style={{ borderBottom: 'none' }}>
                  <Button
                    onClick={() => loadNext(10)}
                  >
                    Load More
                  </Button>
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

GroupsTable.propTypes = {
  namespace: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  handleClose: PropTypes.func,
}

function AddGroupToNamespaceButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [searchTerm, setSearchTerm] = useState()
  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Fab color="primary" size="small" variant="extended" aria-label="add group" onClick={handleOpen}>
        <AddIcon />
        Add Group
      </Fab>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={2}>
          <TextField
            id="search"
            label="Search Groups"
            variant="standard"
            onChange={handleSearchChange}
            style={{width: '100%'}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}  
          />
          <Box pt={2}>
            <React.Suspense fallback={<LoadingTable />}>
              <GroupsTable namespace={props.namespace} searchTerm={searchTerm} handleClose={handleClose} />
            </React.Suspense>
          </Box>
        </Box>
      </Popover>     
    </>
  )
}

AddGroupToNamespaceButton.propTypes = {
  namespace: PropTypes.object.isRequired,
}

export default AddGroupToNamespaceButton
