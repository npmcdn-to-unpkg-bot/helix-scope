import React from 'react';
import NavLink from './NavLink';

const Footer = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/partners">Partners</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="http://helixclimate.eu">Helixclimate.eu</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
