import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const NewUserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <div>
          <Field
            name="firstName"
            type="text"
            component="input"
            label="lastName"
          />
        </div>
      </FormGroup>
      
      <FormGroup>
        <Label>Last Name</Label>
        <div>
          <Field
          name="lastName"
          type="text"
          component="input"
          label="lastName"
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label>Room Number</Label>
        <div>
          <Field
          name="roomNumber"
          type="number"
          component="input"
          label="roomNumber"
        />
        </div>
      </FormGroup>

      <FormGroup>
        <Button type="submit" disabled={submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'user',
})(NewUserForm);