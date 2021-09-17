import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound() {
  return <>Not Found</>;
}

export default NotFound;

export function NotFoundPage() {
  return (
    <Container>
      <NotFound />
    </Container>
  );
}
