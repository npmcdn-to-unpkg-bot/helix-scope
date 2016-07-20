import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';

const ContainerPage = props => {
  if (props.loading) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div>
      <Header className="l-header"/>
        {props.children}
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool
};

export default ContainerPage;
