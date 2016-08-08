import React, {Component} from 'react';
import Button from '../common/Button';

class Modal extends Component {

  handleClickModal(e) {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    return (
      <div className="overlay" onClick={this.handleClickModal}>
        <div className="c-modal">
          <Button onClick={() => this.props.close()} icon="close" style="light" size="small" position="right"/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: React.PropTypes.any,
  open: React.PropTypes.bool,
  close: React.PropTypes.func
};

export default Modal;
