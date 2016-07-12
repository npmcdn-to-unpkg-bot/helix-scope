import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Map from '../common/Map';

const ContainerPage = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Map />
      <Footer />
    </div>
  );
};

export default ContainerPage;
