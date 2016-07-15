import React from 'react';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" onlyActiveOnIndex={Boolean(true)}><img src="images/Helixlogo01.png" className="logo"/></NavLink>
        <ul className="main-menu">
          <li>
            <NavLink to="/global-scenarios">Global Scenarios</NavLink>
          </li>
          <li>
            <NavLink to="/countries">Countries</NavLink>
          </li>
          <li>
            <NavLink to="/compare">Compare</NavLink>
          </li>
          <li>
            <NavLink to="/compare">Share</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
