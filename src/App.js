import React from 'react';
import Footer from './components/page/Footer';
import Header from './components/page/Header';
import AuthState from './contexts/auth/AuthState';

function App() {
  return (
    <AuthState>
      <Header />
      <Footer />
    </AuthState>
  );
}

export default App;
