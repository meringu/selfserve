import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import { RelayEnvironmentProvider } from 'react-relay'

import environment from './relayEnvironment'
import Router from './Router'
import theme from './theme'

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={null}>
        <Router />
      </React.Suspense>
    </ThemeProvider>
  </RelayEnvironmentProvider>,
  document.getElementById('root'),
)
