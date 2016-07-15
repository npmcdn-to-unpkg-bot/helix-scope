import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ContainerPage = props => {
  return (
    <div>
      <Header className="l-header"/>
        {props.children}
      <Footer className="l-footer"/>
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default ContainerPage;
