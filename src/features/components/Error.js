import React from 'react';
import { Container, Alert } from 'react-bootstrap';

function Error({ error }) {
  console.log({ error });
  // Network error
  if (error.networkError) {
    return (
      <Alert variant="danger">
        <Alert.Heading>
          {error.networkError.response.status}:{' '}
          {error.networkError.response.statusText}
        </Alert.Heading>
        {error.networkError.bodyText || error.message}
      </Alert>
    );
  }

  // Default message formatting
  return (
    <Alert variant="danger">
      <Alert.Heading>{error.name}</Alert.Heading>
      {error.message}
    </Alert>
  );
}

export default Error;

export function ErrorPage(props) {
  return (
    <Container>
      <Error {...props} />
    </Container>
  );
}
