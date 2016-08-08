import React from 'react';
import NavLink from './NavLink';
import Button from './Button';

const Header = (props) => {
  return (
    <div>
      <header>
        <nav className="c-header">
          <NavLink to="/"><img src="/images/Helixlogo01.png" className="icon-logo"/></NavLink>
          <ul className="main-menu">
            <li>
              <NavLink to="/global-scenarios/addMap" className="-green">Global Scenarios</NavLink>
            </li>
            <li>
              <NavLink to="/countries" className="-orange">Countries</NavLink>
            </li>
            <li>
              <NavLink to="/compare" className="-red">Compare</NavLink>
            </li>
            <li>
              <Button icon="share" style="none" size="small" onClick={() => props.close(true)}/>
            </li>
          </ul>
          <svg className="mobile-menu icon icon-share -primary">
            <use xlinkHref="#icon-share"></use>
          </svg>
        </nav>
      </header>
    </div>
  );
};

export default Header;
