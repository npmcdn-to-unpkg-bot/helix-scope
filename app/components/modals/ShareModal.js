import React, {Component} from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.handleCopyClick = this.handleCopyClick.bind(this);
  }

  handleCopyClick() {
    if (this.url !== null) {
      this.url.select();
      document.execCommand('copy');
    }
  }

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
            Copy this URL to Share
          </div>
          <div className="actions">
            <input ref={ref => this.url = ref} defaultValue={`http://helixscope.org${this.props.shareUrl}`} className="url"/>
            <Button onClick={this.handleCopyClick} icon="arrow" style="primary" size="large" text="copy" color="dark"/>
          </div>
          <div className="share-links">
            <a href={`http://www.facebook.com/sharer/sharer.php?u=http://helixscope.org${this.props.shareUrl}`} className="c-btn btn-link" target="_blank" rel="noopener noreferrer">
              <svg className={`btn-icon icon-facebook -none -size-small`}>
                <use xlinkHref={`#icon-facebook`}></use>
              </svg>
            </a>
            <a href={`https://twitter.com/share?url=http://helixscope.org${this.props.shareUrl}`} className="c-btn btn-link" target="_blank" rel="noopener noreferrer">
              <svg className={`btn-icon icon-twitter -none -size-small`}>
                <use xlinkHref={`#icon-twitter`}></use>
              </svg>
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

ShareModal.propTypes = {
  open: React.PropTypes.bool,
  close: React.PropTypes.func,
  title: React.PropTypes.string,
  shareUrl: React.PropTypes.string
};

export default ShareModal;
