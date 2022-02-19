import React from 'react'

const ModuleCreate = React.lazy(() => import('./ModuleCreate'))

function entrypoint() {
  return <ModuleCreate />
}

export default entrypoint
