import React from 'react';
import NavLink from '../common/NavLink';

const ContainerPage = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
          </li>
          <li>
            <NavLink to="/global-scenarios">Global Scenarios</NavLink>
          </li>
          <li>
            <NavLink to="/countries">Countries</NavLink>
          </li>
          <li>
            <NavLink to="/compare">Compare</NavLink>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default ContainerPage;
