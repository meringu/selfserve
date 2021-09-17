import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Loader } from './features/components';

const lazyFeature = (feature) =>
  React.lazy(() => import(`./features/${feature}`));

const client = new ApolloClient({
  uri: '/query',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Suspense
          fallback={
            <Container>
              <Loader />
            </Container>
          }
        >
          <Switch>
            <Route path="/modules" component={lazyFeature('modules')} />
            <Route exact strict path="/" component={lazyFeature('home')} />
            <Route>
              <Container>NotFound</Container>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
