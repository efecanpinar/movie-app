import React from 'react';

import { Link } from 'react-router-dom';

import { routes } from '../config/Router';

import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>Movie App</div>
        <div className='nav-item'>
          <div className='nav-links'>
            {routes.map((route) => {
              if (route.isHeaderElement) {
                return (
                  <li key={route.title}>
                    <Link to={route.path} className='link'>
                      {route.title}
                    </Link>
                  </li>
                );
              }
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;