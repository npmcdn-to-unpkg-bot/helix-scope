import React, {Component} from 'react';
import Modal from '../common/Modal';

class MenuModal extends Component {
  render() {
    return (
      <div>
        <Modal
          className="mobile-menu"
          modalOpen={this.props.menuModalOpen}
          handleSetModal={this.props.setMenuModal}
          title={this.props.title}
          >
          test
        </Modal>
      </div>
    );
  }
}

MenuModal.propTypes = {
  /**
  * Define whether modal is open or not
  **/
  menuModalOpen: React.PropTypes.bool,
  /**
  * Callback when closing or opening modal
  **/
  setMenuModal: React.PropTypes.func,
  /**
  * Title for Modal component
  **/
  title: React.PropTypes.string,
  /**
  * Route of current location
  **/
  shareUrl: React.PropTypes.string
};

export default MenuModal;
