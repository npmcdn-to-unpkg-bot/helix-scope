import React from 'react';
import NavBar from './NavBar';
import NavLink from './NavLink';

const Header = props => {
  return (
    <div>
      <header className="l-header">
        <NavBar/>
      </header>
    </div>
  );
};

export default Header;
