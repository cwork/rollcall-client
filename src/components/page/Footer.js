import React from 'react';

const Footer = () => {
  return (
    <footer
      className="page-footer has-background-link has-text-light"
      id="page-footer"
    >
      <div className="container">
        <p className="content">
          Created by Colby Work &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
