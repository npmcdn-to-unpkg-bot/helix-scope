import React from 'react';
import NavLink from '../common/NavLink';
import Footer from '../common/Footer';

const ContainerPage = props => {
  if (props.loading) {
    return (
      <p>loading</p>
    );
  }
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
      <Footer/>
    </div>

  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool
};

export default ContainerPage;
