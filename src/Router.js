import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import {
  graphql,
  useLazyLoadQuery,
} from 'react-relay'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import GroupEntrypoint from './components/Group.entrypoint'
import GroupListEntrypoint from './components/GroupList.entrypoint'
import Header from './components/Header'
import HomeEntrypoint from './components/Home.entrypoint'
import ModuleEntrypoint from './components/Module.entrypoint'
import ModuleCreateEntrypoint from './components/ModuleCreate.entrypoint'
import ModuleListEntrypoint from './components/ModuleList.entrypoint'
import NamespaceEntrypoint from './components/Namespace.entrypoint'
import NamespaceListEntrypoint from './components/NamespaceList.entrypoint'
import PageNotFound from './components/PageNotFound'
import ProfileEntrypoint from './components/Profile.entrypoint'
import UserListEntrypoint from './components/UserList.entrypoint'

const RouterQuery = graphql`
  query RouterQuery {
    ...HeaderQuery
  }
`

function Fallback() {
  return (
    <Box sx={{ textAlign: 'center' }} mt={2}>
      <CircularProgress />
    </Box>
  )
}

function Router() {
  const queryRef = useLazyLoadQuery(RouterQuery)

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback />}>
        <Header queryRef={queryRef} />
        <React.Suspense fallback={<Fallback />}>
          <Switch>
            <Route exact path="/" component={HomeEntrypoint} />
            <Route exact path="/groups" >
              <GroupListEntrypoint />
            </Route>
            <Route exact path="/groups/:id" >
              <GroupEntrypoint />
            </Route>
            <Route exact path="/modules" >
              <ModuleListEntrypoint />
            </Route>
            <Route exact path="/modules/create" >
              <ModuleCreateEntrypoint />
            </Route>
            <Route exact path="/modules/:id" >
              <ModuleEntrypoint />
            </Route>
            <Route exact path="/namespaces" >
              <NamespaceListEntrypoint />
            </Route>
            <Route exact path="/namespaces/:id" >
              <NamespaceEntrypoint />
            </Route>
            <Route exact path="/users" >
              <UserListEntrypoint />
            </Route>
            <Route exact path="/profile" component={ProfileEntrypoint} />
            <Route path="/" component={PageNotFound}/>
          </Switch>
        </React.Suspense>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default Router
