import React from 'react';
import NavBar from '../common/NavBar';
import SearchBox from '../common/SearchBox';
import Footer from '../common/Footer';

export default () => {
  return (
    <div>
      <div className="navbar-head">
        <NavBar/>
      </div>
      <div className="l-banner">
        <div className="c-txt-title">Countries</div>
        <div className="c-txt-intro">Whats going to happen in your country? Find out the future of your country under different scenarios.</div>
        <SearchBox/>
      </div>
      <Footer className="l-footer"/>
    </div>
  );
};
