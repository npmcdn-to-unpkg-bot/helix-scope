import React from 'react';
import Footer from '../common/Footer';
import Modal from '../common/Modal';

const AboutPage = props => {
  return (
    <div className="l-wrap">
      About
      <Modal open={props.modalOpen} close={() => props.setModal(false)}>
        <div>
          Test
        </div>
      </Modal>
      <Footer className="l-footer"/>
    </div>
  );
};

AboutPage.propTypes = {
  modalOpen: React.PropTypes.bool,
  setModal: React.PropTypes.func
};

export default AboutPage;
