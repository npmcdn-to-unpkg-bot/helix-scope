import React from 'react';
import NavLink from './NavLink';

const Footer = props => {
  return (
    <div>
      <footer>
        <img src="images/helixLogo_negative.png" className="logo-footer"/>
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
              <a href="http://helixclimate.eu" target="_blank" rel="noopener noreferrer">Helixclimate.eu</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
