import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContxt } from "../../context/GlobalState";

export const AddUser = () => {
  const [name, setName] = useState("");

  const { addUser } = useContext(GlobalContxt);

  const navigate = useNavigate();
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmiteUser = () => {
    const newUser = {
      id: 4,
      name,
    };
    addUser(newUser);
    navigate("/");
  };
  return (
    <Form onSubmit={onSubmiteUser}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="Entre Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger" style={{ margin: "1rem" }}>
        Cancel
      </Link>
    </Form>
  );
};
