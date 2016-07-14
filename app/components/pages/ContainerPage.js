import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ContainerPage = props => {
  return (
    <div>
      <Header/>
        {props.children}
      <Footer/>
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default ContainerPage;
