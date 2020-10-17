import React from 'react';
import AppController from './apps/AppController';
import AuthState from './contexts/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <AppController />
    </AuthState>
  );
}

export default App;
