import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContxt } from '../../context/GlobalState';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserLIst = () => {
  const { users, removeUser } = useContext(GlobalContxt);

  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem key={user.id} className='d-flex'>
          <strong>{user.name}</strong>
          <div className='m-auto'>
            <Link className='btn btn-warning mx-3' to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button onClick={() => removeUser(user.id)} color='danger'>
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
