import React, {Component} from 'react';
import Button from '../common/Button';

class Modal extends Component {

  handleClickModal(e) {
    if (e.target === e.currentTarget) {
      this.props.setModal();
    }
  }

  render() {
    if (!this.props.modalOpen) {
      return null;
    }
    return (
      <div className="overlay" onClick={(e) => this.handleClickModal(e)}>
        <div className={`c-modal ${this.props.className}`}>
          <Button onClick={() => this.props.setModal()} icon="close" style="dark" size="medium" position="right"/>
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
  children: React.PropTypes.any,
  modalOpen: React.PropTypes.bool,
  setModal: React.PropTypes.func,
  className: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Modal;
