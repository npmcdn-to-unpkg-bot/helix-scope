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
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool,
  setModal: React.PropTypes.func,
  modalOpen: React.PropTypes.bool,
  location: React.PropTypes.object,
  pathname: React.PropTypes.string
};

export default ContainerPage;
