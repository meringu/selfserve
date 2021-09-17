import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Create from './Create';
import Edit from './Edit';
import Install from './Install';
import List from './List';

function Modules() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact strict path={`${path}/:id/edit`} component={Edit} />
      <Route exact strict path={`${path}/:id/install`} component={Install} />
      <Route exact strict path={`${path}/create`} component={Create} />
      <Route exact strict path={path} component={List} />
    </Switch>
  );
}

export default Modules;
