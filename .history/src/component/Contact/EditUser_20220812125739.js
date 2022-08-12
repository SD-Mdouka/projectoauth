import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContxt } from "../../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const [selectUser, setSelectUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContxt);

  const navigate = useNavigate();
  const { currentUserId } = useParams();

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectUser(selectedUser);
  }, [currentUserId, users]);
  const onChangeName = (e) => {};

  const onSubmiteUser = () => {
    navigate("/");
  };
  return (
    <div>
      Edit User
      <Form onSubmit={onSubmiteUser}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={selectUser.name}
            onChange={onChangeName}
            placeholder="Entre Name"
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger" style={{ margin: "1rem" }}>
          Cancel
        </Link>
      </Form>
    </div>
  );
};
