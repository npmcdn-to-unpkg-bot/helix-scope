import React from 'react';
import Footer from '../common/Footer';
import MapsModal from '../modals/MapsModal';

const AboutPage = props => {
  return (
    <div className="l-wrap">
      About
      <MapsModal/>
      <Footer className="l-footer"/>
    </div>
  );
};

AboutPage.propTypes = {
  modalOpen: React.PropTypes.bool,
  setModal: React.PropTypes.func
};

export default AboutPage;
