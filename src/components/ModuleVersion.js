import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import CircularProgress from '@mui/material/CircularProgress'
import Fab from '@mui/material/Fab'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { graphql, useFragment, useMutation } from 'react-relay'

const TYPES = { 
  STRING: 'String',
  BOOL: 'Bool',
  INTEGER: 'Integer',
  NUMBER: 'Number',
}

function ModuleVersion(props) {
  const apiVersion = useFragment(graphql`
    fragment ModuleVersionQuery on ModuleVersion @refetchable(queryName: "RefetchModuleVersionQuery") {
      id
      variables {
        name
        description
        sensitive
        type
        default
      }
    }
  `, props.version)

  const [commit, isInflight] = useMutation(graphql`
    mutation ModuleVersionCreateMutation($module: ID!, $input: ModuleVersionInput!) {
      createModuleVersion(module: $module, input: $input) {
        ...ModuleVersionQuery
        module {
          latestVersion {
            id
          }
        }
      }
    }
  `)

  const apiVersionNoId = apiVersion && Object.fromEntries(Object.entries(apiVersion).filter(e => e[0] !== 'id'))

  const [version, setVersion] = useState(apiVersionNoId || {variables: []})

  function setVariableField(i, field, value) {
    setVersion(prev => ({
      ...prev,
      variables: [...prev.variables.map((variable, vi) => (
        vi === i
          ? {
            ...variable,
            [field]: value,
          }
          : { ...variable }
      ))],
    }))
  }

  function handleRemoveVariable(i) {
    return function() {
      setVersion(prev => ({
        ...prev,
        variables: [...prev.variables.filter((variable, vi) => vi !== i)],
      }))
    }
  }

  function handleAddVariable() {
    setVersion(prev => ({
      ...prev,
      variables: [...prev.variables, {
        name: '',
        description: '',
        sensitive: false,
        type: 'STRING',
        default: null,
      }],
    }))
  }

  const hasChanges = JSON.stringify(apiVersionNoId) === JSON.stringify(version)

  console.log({
    apiVersion: apiVersionNoId,
    editingVersion: version,
  })

  function handleSubmit() {
    commit({
      variables: { module: props.moduleId, input: {
        variables: JSON.stringify(version.variables),
      }},
    })
  }

  return (
    <>
      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', pr: 2, mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography color="text.primary">Variables</Typography>
          </Box>
          <Fab color="primary" size="small" variant="extended" aria-label="add group" onClick={handleAddVariable}>
            <AddIcon />
              New Variable
          </Fab>
        </Box>
      </div>

      {version.variables.map((variable, i) => (
        <Box mb={2} key={i}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={variable.name}
            sx={{ mr: 2, mb: 2 }}
            onChange={e => setVariableField(i, 'name', e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            variant="standard"
            value={variable.description}
            sx={{ mr: 2, mb: 2 }}
            onChange={e => setVariableField(i, 'description', e.target.value)}
          />
          <Autocomplete
            id="type"
            disablePortal
            disableClearable
            value={TYPES[variable.type]}
            isOptionEqualToValue={(option, value)=> option.label === value}
            onChange={(e, value) => setVariableField(i, 'type', value.id)}
            options={Object.keys(TYPES).map(k => ({ label: TYPES[k], id: k }))}
            sx={{ width: 130, mr: 2, mb: 2, display: 'inline-flex' }}
            renderInput={params => <TextField {...params} label="Type" variant="standard" />}
          />
          <FormControlLabel
            label="Sensitive"
            control={
              <Checkbox
                checked={variable.sensitive}
                onChange={(e, value) => setVariableField(i, 'sensitive', Boolean(value))}
              />
            }
          />
          <Button
            onClick={handleRemoveVariable(i)}
          >
            <CloseIcon />
          </Button>
        </Box>
      ))}

      <Box mb={2}>
        <Button
          onClick={handleSubmit}
          disabled={hasChanges || isInflight}
        >
          {isInflight ? <CircularProgress size={20} /> : 'Create New Module Version'}
        </Button>
      </Box>
    </>
  )
}

ModuleVersion.propTypes = {
  version: PropTypes.object,
  moduleId: PropTypes.string.isRequired,
}

export default ModuleVersion
