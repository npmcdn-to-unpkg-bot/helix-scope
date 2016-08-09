import React from 'react';
import Footer from '../common/Footer';

const AboutPage = () => {
  return (
    <div className="l-wrap">
      About
      <Footer className="l-footer"/>
    </div>
  );
};

AboutPage.propTypes = {
  modalOpen: React.PropTypes.bool,
  setModal: React.PropTypes.func
};

export default AboutPage;
