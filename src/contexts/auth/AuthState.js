import Axios from 'axios';
import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: Boolean(localStorage.getItem('token'))
  };

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async formData => {
    try {
      const res = await Axios.post(
        'http://localhost:5000/api/auth/login',
        formData
      );
      console.log(res);
      dispatch({ type: 'LOGIN', payload: res.data.token });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.message });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        token: authState.token,
        isAuthenticated: authState.isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
