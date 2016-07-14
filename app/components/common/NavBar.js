import React from 'react';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" onlyActiveOnIndex={Boolean(true)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/scenarios">Global Scenarios (show leaflet map)</NavLink>
          </li>
          <li>
            <NavLink to="/global-scenarios">Global Scenarios (add map modal)</NavLink>
          </li>
          <li>
            <NavLink to="/countries">Countries</NavLink>
          </li>
          <li>
            <NavLink to="/compare">Compare</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
