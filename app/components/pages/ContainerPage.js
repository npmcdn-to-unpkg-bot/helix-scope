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
      <Header close={props.setModal}/>
      {props.children}
      <ShareModal open={props.modalOpen} close={() => props.setModal(false)} title="Share"/>
    </div>
  );
};

ContainerPage.propTypes = {
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool,
  setModal: React.PropTypes.func
};

export default ContainerPage;
