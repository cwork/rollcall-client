import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main" id="page-main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default PageContainer;
