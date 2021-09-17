import { useQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ErrorPage, Loader, NotFoundPage, LoaderPage } from '../components';
import { getModulesQuery, updateModuleQuery } from './queries.js';

function Edit() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(getModulesQuery, {
    variables: { where: { id } },
  });

  const [updateModule, { loading: updating, error: updateError }] =
    useMutation(updateModuleQuery);
  const [editingModule, setEditingModule] = useState({ id });
  function setEditingModuleField(key, value) {
    setEditingModule((prev) => ({ ...prev, [key]: value }));
  }

  async function triggerUpdate() {
    updateModule({ variables: { module: editingModule } }).catch(
      () => undefined,
    );
  }

  if (loading) return <LoaderPage />;
  if (error) return <ErrorPage error={error} />;
  if (data.modules.edges.length === 0) return <NotFoundPage />;

  const module = data.modules.edges[0].node;

  return (
    <Container>
      {updateError ? (
        <Alert variant="danger">
          <Alert.Heading>Terraform validation error</Alert.Heading>
          {updateError.data.diagnostics.map((diag, id) => (
            <p key={id}>
              {diag.severity}: {diag.summary}: {diag.detail}
            </p>
          ))}
        </Alert>
      ) : null}
      <h1>{module.name}</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            defaultValue={module.description}
            onChange={(e) =>
              setEditingModuleField('description', e.currentTarget.value)
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={triggerUpdate} disabled={updating}>
          {updating ? <Loader /> : 'Update'}
        </Button>
      </Form>
    </Container>
  );
}

export default Edit;
