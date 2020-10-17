import React, { useContext } from 'react';
import authContext from '../contexts/auth/authContext';
import IsAuthenticated from './IsAuthenticated';
import IsNotAuthenticated from './IsNotAuthenticated';

/**
 * This AppController will be imported in the main App component.
 * It will get the current auth state, and will conditionally
 * load components based on whether a user is logged in or not.
 */
const AppController = () => {
  const { isAuthenticated } = useContext(authContext);
  if (!isAuthenticated) return <IsNotAuthenticated />;
  return <IsAuthenticated />;
};

export default AppController;
