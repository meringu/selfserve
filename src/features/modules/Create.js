import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { Loader, Error } from '../components';
import { createModuleQuery } from './queries';

function Create() {
  const history = useHistory();

  const [createModule, { loading: creating, error: createError }] =
    useMutation(createModuleQuery);

  const [creatingModule, setCreatingModule] = useState({});
  function setCreatingModuleField(key, value) {
    setCreatingModule((prev) => ({ ...prev, [key]: value }));
  }

  async function triggerCreate() {
    createModule({ variables: { module: creatingModule } })
      .then(({ data }) => history.push(`/modules/${data.createModule.id}/edit`))
      .catch(() => undefined);
  }

  return (
    <Container>
      {createError ? <Error error={createError} /> : null}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCreatingModuleField('name', e.currentTarget.value)
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCreatingModuleField('description', e.currentTarget.value)
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={triggerCreate} disabled={creating}>
          {creating ? <Loader /> : 'Create'}
        </Button>
      </Form>
    </Container>
  );
}

export default Create;
