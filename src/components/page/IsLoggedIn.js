import React from 'react';
import Button from '../form/Button';

const IsLoggedIn = ({ logout }) => {
  return <Button onClick={logout} val="Logout" />;
};

export default IsLoggedIn;
