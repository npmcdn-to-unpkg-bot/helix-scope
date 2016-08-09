import React from 'react';
import Header from '../common/Header';
import ShareModal from '../modals/ShareModal';

const ContainerPage = props => {
  if (props.loading) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div>
      <Header setModal={props.setModal}/>
      {props.children}
      <ShareModal modalOpen={props.modalOpen} setModal={() => props.setModal(false)} shareUrl={props.location.pathname} title="Share"/>
    </div>
  );
};

ContainerPage.propTypes = {
  /**
  * Define required content for page
  **/
  children: React.PropTypes.element.isRequired,
  /**
  * Define whether page is loading or not
  **/
  loading: React.PropTypes.bool,
  /**
  * Callback to set modal open or closed
  **/
  setModal: React.PropTypes.func,
  /**
  * Define whether modal is open or not
  **/
  modalOpen: React.PropTypes.bool,
  /**
  * Finds the route of current location in URL
  **/
  location: React.PropTypes.object,
  /**
  * Finds route pathname string for current location
  **/
  pathname: React.PropTypes.string
};

export default ContainerPage;
