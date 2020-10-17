import React from 'react';
import Footer from './components/page/Footer';
import Header from './components/page/Header';
import AuthState from './contexts/auth/AuthState';
import LoginPage from './pages/Login.page';

function App() {
  return (
    <AuthState>
      <LoginPage />
    </AuthState>
  );
}

export default App;
