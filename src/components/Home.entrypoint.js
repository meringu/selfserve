import React from 'react'

const Home = React.lazy(() => import('./Home'))

function entrypoint() {
  return <Home />
}

export default entrypoint
