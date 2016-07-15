import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';

const ContainerPage = props => {
  return (
    <div>
      <Header className="l-header"/>
      <div className="home-slider">
        <NavBar/>
      {props.children}
      </div>
      <Footer className="l-footer"/>
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default ContainerPage;
