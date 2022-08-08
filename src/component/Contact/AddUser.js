import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Entre Name'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger' style={{ margin: '1rem' }}>
        Cancel
      </Link>
    </Form>
  );
};
