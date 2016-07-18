import React from 'react';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar wrap">
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
            <svg className="icon icon-share -primary">
              <use xlinkHref="#icon-share"></use>
            </svg>
          </li>
        </ul>
        <svg className="mobile-menu icon icon-share -primary">
          <use xlinkHref="#icon-share"></use>
        </svg>
      </nav>
    </div>
  );
};

export default NavBar;
