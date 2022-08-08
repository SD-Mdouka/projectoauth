import React from 'react';
import { Home } from './Contact/Home';
import { AddUser } from './Contact/AddUser';
import { EditUser } from './Contact/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {
  return (
    <div
      style={{ maxWidh: '30rem', margin: '4rem auto', padding: '4rem 5rem' }}
    >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<AddUser />} />
          <Route exact path='/edit/:id' element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
};
