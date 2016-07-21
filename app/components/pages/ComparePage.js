import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

export default () => {
  return (
    <div>
      <div className="navbar-head">
        <NavBar/>
      </div>
      Compare
      <Footer className="l-footer"/>
    </div>
  );
};
