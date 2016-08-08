import React, {Component} from 'react';
import Button from '../common/Button';

class Modal extends Component {

  handleClickModal(e) {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.open) {
      return null;
    }
    return (
      <div className="overlay" onClick={(e) => this.handleClickModal(e)}>
        <div className={`c-modal ${this.props.className}`}>
          <Button onClick={() => this.props.close()} icon="close" style="light" size="small" position="right"/>
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
  open: React.PropTypes.bool,
  close: React.PropTypes.func,
  className: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Modal;
