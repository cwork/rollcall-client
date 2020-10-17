import React from 'react';
import AppController from './apps/AppController';
import AuthState from './contexts/auth/AuthState';

function App() {
  return (
    <AuthState>
      <AppController />
    </AuthState>
  );
}

export default App;
