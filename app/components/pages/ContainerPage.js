import React from 'react';
import Header from '../common/Header';

const ContainerPage = props => {
  if (props.loading) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool
};

export default ContainerPage;
