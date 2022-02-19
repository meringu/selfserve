import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'

function PageNotFound() {
  return (
    <Container>
      <Box mt={2}>
        <Typography color="text.primary">Page not found.</Typography>
      </Box>
    </Container>
  )
}

export default PageNotFound
