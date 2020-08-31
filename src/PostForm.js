import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function PostForm() {
  const INITIAL_FORM_STATE = {
    title: '',
    description: '',
    body: ''
  };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value
    }))
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="title-input">Title:</Label>
        <Input type="text" id="title-input" name="title" value={formData.title} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="description-input">Description:</Label>
        <Input type="text" id="description-input" name="description" value={formData.description} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="body-input">Body:</Label>
        <Input type="textarea" id="body-input" name="body" value={formData.body} onChange={changeHandler} />
        </FormGroup>
        <Button color="primary" type="submit">Save</Button>
        <a href="/" className="btn btn-secondary ml-2">Cancel</a>
      </Form>
    </Container>
  )
}