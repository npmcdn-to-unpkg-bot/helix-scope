import React, {Component} from 'react';
import {Link} from 'react-router';

class Button extends Component {
  render() {
    let btnText;
    if (this.props.text) {
      btnText = <span className={`btn-text -${this.props.color}`}>{this.props.text}</span>;
    }
    return (
      <div>
        <button className={`c-btn -${this.props.position}`} onClick={this.props.onAddClick} disabled={this.props.disabled}>
          <Link to={this.props.link} className="btn-link">
            <svg className={`btn-icon icon-${this.props.icon} -${this.props.style} -size-${this.props.size}`}>
              <use xlinkHref={`#icon-${this.props.icon}`}></use>
            </svg>
            {btnText}
          </Link>
        </button>
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  link: React.PropTypes.string,
  icon: React.PropTypes.string,
  style: React.PropTypes.string,
  text: React.PropTypes.string,
  size: React.PropTypes.string,
  onAddClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  position: React.PropTypes.string,
  color: React.PropTypes.string
};
