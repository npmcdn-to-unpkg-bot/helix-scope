import React, {Component} from 'react';
import Button from '../common/Button';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClickModal = this.handleClickModal.bind(this);
  }
  handleClickModal(e) {
    if (e.target === e.currentTarget) {
      this.props.handleSetModal();
    }
  }

  render() {
    if (!this.props.modalOpen) {
      return null;
    }
    return (
      <div className="overlay" onClick={this.handleClickModal}>
        <div className={`c-modal ${this.props.className}`}>
          <Button onClick={this.props.handleSetModal} icon="close" style="dark" size="medium" position="right"/>
          <div className="title">
            {this.props.title}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /**
  * Define required content of modal
  **/
  children: React.PropTypes.any,
  /**
  * Define whether modal is open or not
  **/
  modalOpen: React.PropTypes.bool,
  /**
  * Callback to set modal open or closed
  **/
  handleSetModal: React.PropTypes.func,
  /**
  * Define classname for modal (share, map, mobile menu)
  **/
  className: React.PropTypes.string,
  /**
  * Define title for modal
  **/
  title: React.PropTypes.string
};

export default Modal;
