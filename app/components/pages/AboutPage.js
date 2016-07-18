import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

export default props => {
  return (
    <div>
      <div className="navbar-head">
        <NavBar/>
      </div>
      About
      <Footer className="l-footer"/>
    </div>
  );
};
