import { useQuery } from '@apollo/client';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { LoaderPage, ErrorPage } from '../components';
import { getModulesQuery } from './queries';

const itemsPerPage = 4;

function List() {
  const history = useHistory();

  const [pages, setPages] = useState([]);
  const { loading, error, data } = useQuery(getModulesQuery, {
    variables: { after: pages[pages.length - 1], first: itemsPerPage },
  });

  if (loading) return <LoaderPage />;
  if (error) return <ErrorPage error={error} />;

  return (
    <Container>
      <Button variant="primary" onClick={() => history.push(`/modules/create`)}>
        Create
      </Button>
      {data.modules.edges.map((edge) => (
        <Card key={edge.node.id}>
          <Card.Body>
            <Card.Title>{edge.node.name}</Card.Title>
            <Card.Text>{edge.node.description}</Card.Text>
            <Button
              variant="link"
              onClick={() => history.push(`/modules/${edge.node.id}/edit`)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>{' '}
            <Button
              variant="primary"
              onClick={() => history.push(`/modules/${edge.node.id}/install`)}
            >
              Install
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Button
        variant="primary"
        onClick={() => setPages((prev) => prev.slice(0, -1))}
        disabled={pages.length === 0}
      >
        Previous
      </Button>
      {pages.length * itemsPerPage} to{' '}
      {pages.length * itemsPerPage + data.modules.edges.length} of{' '}
      {data.modules.totalCount}
      <Button
        variant="primary"
        onClick={() =>
          setPages((prev) => [...prev, data.modules.pageInfo.endCursor])
        }
        disabled={!data.modules.pageInfo.hasNextPage}
      >
        Next
      </Button>
    </Container>
  );
}

export default List;
