import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

export default props => {
  return (
    <div>
      <div className="l-wrap">
        <NavBar/>
        Partners
        <Footer className="l-footer"/>
      </div>
    </div>
  );
};
