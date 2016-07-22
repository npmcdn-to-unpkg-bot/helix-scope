import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

export default () => {
  return (
    <div>
      <div className="l-wrap">
        <NavBar/>
        News
        <Footer className="l-footer"/>
      </div>
    </div>
  );
};
