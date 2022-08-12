import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContxt } from "../../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const [selectedUser, setSelectUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUsers } = useContext(GlobalContxt);

  const navigate = useNavigate();

  const currentUserId = useParams();

  useEffect(() => {
    const userId = currentUserId.id;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectUser(selectedUser);
  }, [currentUserId, users]);
  const onChangeName = (e) => {
    setSelectUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmiteUser = () => {
    editUsers(selectedUser);
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
            name="name"
            value={selectedUser.name}
            onChange={onChangeName}
            placeholder="Entre Name"
          ></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger" style={{ margin: "1rem" }}>
          Cancel
        </Link>
      </Form>
    </div>
  );
};
