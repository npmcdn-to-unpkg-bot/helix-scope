import React, {Component} from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.handleCopyClick = this.handleCopyClick.bind(this);
  }

  handleCopyClick() {
    try {
      this.url.select();
      const isEnabled = document.queryCommandEnabled('copy');
      const successful = document.execCommand('copy');
      const btn = document.getElementsByClassName('-copy-link');
      const copytext = document.getElementsByClassName('copy-text');

      if (isEnabled && successful) {
        btn[0].childNodes[1].innerHTML = 'copied';
      } else {
        copytext[0].className = 'copy-text -show';
      }
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Modal
          className="share"
          modalOpen={this.props.modalOpen}
          setModal={this.props.setModal}
          title={this.props.title}
          >
          <div className="text">
            Copy this URL to Share
          </div>
          <div className="actions">
            <input ref={ref => this.url = ref} defaultValue={`http://helixscope.org${this.props.shareUrl}`} className="url"/>
            <Button onClick={this.handleCopyClick} icon="arrow" style="primary" size="large" text="copy" color="dark" position="copy-link"/>
          </div>
          <div className="copy-text">
            Now press ⌘ + C to copy
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
  /**
  * Define whether modal is open or not
  **/
  modalOpen: React.PropTypes.bool,
  /**
  * Callback when closing or opening modal
  **/
  setModal: React.PropTypes.func,
  /**
  * Title for Modal component
  **/
  title: React.PropTypes.string,
  /**
  * Route of current location
  **/
  shareUrl: React.PropTypes.string
};

export default ShareModal;
