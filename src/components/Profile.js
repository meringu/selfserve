import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useFragment } from 'react-relay'

function Profile(props) {
  const user = useFragment(graphql`
    fragment Profile_user on User {
      id
      name
    }
  `, props.user)

  return (
    <Container>
      <Box mt={2}>
        <Typography color="text.primary">Profile</Typography>
      </Box>
      <Box mv={2}>
        {user.name}
      </Box>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Profile
