import { useQuery } from '@apollo/client';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ErrorPage, LoaderPage, NotFoundPage } from '../components';
import { getModulesQuery } from './queries.js';

function Install() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(getModulesQuery, {
    variables: { where: { id } },
  });

  if (loading) return <LoaderPage />;
  if (error) return <ErrorPage error={error} />;
  if (data.modules.edges.length === 0) return <NotFoundPage />;

  const module = data.modules.edges[0].node;

  return (
    <Container>
      <h1>{module.name}</h1>
      <p>{module.description}</p>
    </Container>
  );
}

export default Install;
