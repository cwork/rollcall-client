import React, { useContext } from 'react';
import authContext from '../../contexts/auth/authContext';
import IsLoggedIn from './IsLoggedIn';
import Logo from './Logo';

const Navbar = () => {
  const { logout, isAuthenticated } = useContext(authContext);
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
        {isAuthenticated && (
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <IsLoggedIn logout={logout} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
