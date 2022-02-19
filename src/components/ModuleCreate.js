import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import { Link, useHistory } from 'react-router-dom'

function ModuleCreate() {
  const [commit, isInflight] = useMutation(graphql`
    mutation ModuleCreateMutation($input: ModuleInput!) {
      createModule(input: $input) {
        id
      }
    }
  `)

  const history = useHistory()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleClick() {
    if (name !== '') {
      commit({
        variables: { input: { name, description }},
        onCompleted: (data) => history.push(`/modules/${data.createModule.id}`),
      })
    }
  }

  return (
    <Container>
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/modules">
            <Typography color="text.primary">Modules</Typography>
          </Link>
          <Typography color="text.primary">Create</Typography>
        </Breadcrumbs>
      </Box>

      <Box mb={2}>
        <TextField
          id="search"
          label="Name"
          variant="standard"
          onChange={e => setName(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <TextField
          id="search"
          label="Description"
          variant="standard"
          onChange={e => setDescription(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <Button onClick={handleClick} disabled={isInflight || name === ''}>
          {isInflight ? <CircularProgress size={20} /> : 'Create Module'}
        </Button>
      </Box>
    </Container>
  )
}

export default ModuleCreate
