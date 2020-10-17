import React, { useContext } from 'react';
import authContext from '../contexts/auth/authContext';
import IsAuthenticated from './IsAuthenticated';
import IsNotAuthenticated from './IsNotAuthenticated';

const AppController = () => {
  const { isAuthenticated } = useContext(authContext);
  if (isAuthenticated) return <IsAuthenticated />;
  return <IsNotAuthenticated />;
};

export default AppController;
