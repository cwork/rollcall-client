import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <Logo width="112" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
