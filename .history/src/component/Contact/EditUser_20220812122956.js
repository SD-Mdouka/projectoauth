import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContxt } from "../../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = () => {
  const [selectUser, setSelectUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContxt);

  const navigate = useNavigate();

  const currentUserId = props.match.params.id;
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmiteUser = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    navigate("/");
  };
  return (
    <div>
      Edit User
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
    </div>
  );
};
