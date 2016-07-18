import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

export default props => {
  return (
    <div>
      <div className="navbar-head">
        <NavBar/>
      </div>
      News
      <Footer className="l-footer"/>
    </div>
  );
};
