import React from 'react';
import Header from '../common/Header';
import ShareModal from '../modals/ShareModal';
import MenuModal from '../modals/MenuModal';

const ContainerPage = props => {
  if (props.loading) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div>
      <Header setShareModal={props.setShareModal} setMenuModal={props.setMenuModal}/>
      {props.children}
      <ShareModal shareModalOpen={props.shareModalOpen} setShareModal={() => props.setShareModal(false)} shareUrl={props.location.pathname} title="Share"/>
      <MenuModal menuModalOpen={props.menuModalOpen} setShareModal={props.setShareModal} setMenuModal={() => props.setMenuModal(false)}/>
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
  setShareModal: React.PropTypes.func,
  /**
  * Callback to set modal open or closed
  **/
  setMenuModal: React.PropTypes.func,
  /**
  * Define whether modal is open or not
  **/
  menuModalOpen: React.PropTypes.bool,
  /**
  * Define whether modal is open or not
  **/
  shareModalOpen: React.PropTypes.bool,
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
