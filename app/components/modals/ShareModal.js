import React, {Component} from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

class ShareModal extends Component {

  render() {
    return (
      <div>
        <Modal
          className="share"
          open={this.props.open}
          close={this.props.close}
          title={this.props.title}
          >
          <div className="text">
            Copy this link son.
          </div>
          <Button icon="arrow" style="primary" size="large" position="right"/>
        </Modal>
      </div>
    );
  }
}

ShareModal.propTypes = {
  open: React.PropTypes.bool,
  close: React.PropTypes.func,
  title: React.PropTypes.string,
  shareURL: React.PropTypes.string
};

export default ShareModal;
