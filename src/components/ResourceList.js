import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { usePaginationFragment } from 'react-relay'
import { useHistory } from 'react-router-dom'

function TableLoader(props) {
  const { search } = props

  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(props.query, props.queryRef)

  const history = useHistory()

  useEffect(() => {
    if (search !== undefined) {
      const args = { first: props.pageSize }
      if (search === '') {
        refetch(args)
      } else {
        refetch({ ...args, where: { nameContains: search }})
      }
    }
    
  }, [search, refetch])

  const connection = props.getConnection(data)

  return (
    <TableContainer>
      <Table aria-label="module table">
        <TableBody>
          {connection.edges.map(edge => edge.node).map(row => (
            <TableRow
              key={row.id}
              onClick={() => history.push(`/${props.name.toLowerCase()}s/${row.id}`)}
              style={{cursor: 'pointer'}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
          <TableRow key="last">
            <TableCell component="th" scope="row" style={{ borderBottom: 'none'}}>
              {isLoadingNext ? (
                <Box sx={{ textAlign: 'center' }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ textAlign: 'right'}}>
                  {connection.edges.length === 0 ? 0 : 1}-{connection.edges.length} of {connection.totalCount}
                </Box>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {hasNext && !isLoadingNext &&
        <Box mt={2}>
          <Button
            onClick={() => loadNext(props.pageSize)}
          >
          Load more
          </Button>
        </Box>
      }
    </TableContainer>
  )
}

TableLoader.propTypes = {
  query: PropTypes.object.isRequired,
  queryRef: PropTypes.object.isRequired,
  search: PropTypes.string,
  getConnection: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

function LoadingTable(props) {
  return (
    <TableContainer>
      <Table aria-label={`${props.name.toLowerCase()} table`}>
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

LoadingTable.propTypes = {
  name: PropTypes.string.isRequired,
}

function ResourceList(props) {
  const history = useHistory()

  const [search, setSearch] = useState()

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">{props.name}s</Typography>
        </Breadcrumbs>
      </Box>

      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', pr: 2, mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              id="search"
              label={`Search ${props.name}s`}
              variant="standard"
              onChange={onSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}  
            />
          </Box>
          <Button
            onClick={() => history.push(`/${props.name.toLowerCase()}s/create`)}
          >
            Create New {props.name}
          </Button>
        </Box>
      </div>
  
      <Box mb={2}>
        <React.Suspense fallback={<LoadingTable {...props} />}>
          <TableLoader {...props} search={search} />
        </React.Suspense>
      </Box>
    </>
  )
}

ResourceList.propTypes = {
  query: PropTypes.object.isRequired,
  queryRef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  getConnection: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
}

export default ResourceList
