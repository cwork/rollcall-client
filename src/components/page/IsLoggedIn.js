import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../form/Button';

const IsLoggedIn = ({ logout }) => {
  return (
    <div className="buttons">
      <Link to="/user/add" className="button">
        Add User
      </Link>
      <Button onClick={logout} val="Logout" />
    </div>
  );
};

export default IsLoggedIn;
