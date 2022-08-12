import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContxt } from "../../context/GlobalState";

export const AddUser = () => {
  const { addUser } = useContext(GlobalContxt);
  const navigate = useNavigate();
  const onSubmiteUser = () => {
    const newUser = {
      id: 4,
      name: "salah mdouka",
    };
    addUser(newUser);
    navigate("/");
  };
  return (
    <Form onSubmit={onSubmiteUser}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Entre Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger" style={{ margin: "1rem" }}>
        Cancel
      </Link>
    </Form>
  );
};
