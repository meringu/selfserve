import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;

export function LoaderPage() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}
