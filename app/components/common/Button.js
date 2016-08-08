import React, {Component} from 'react';
import {Link} from 'react-router';

class Button extends Component {
  render() {
    let btnText;
    if (this.props.text) {
      btnText = <span className={`btn-text -${this.props.color}`}>{this.props.text}</span>;
    }
    if (this.props.link) {
      return (
        <Link to={this.props.link} className="c-btn btn-link">
          <svg className={`btn-icon icon-${this.props.icon} -${this.props.style} -size-${this.props.size}`}>
            <use xlinkHref={`#icon-${this.props.icon}`}></use>
          </svg>
          {btnText}
        </Link>
      );
    }
    return (
      <button className={`c-btn -${this.props.position}`} onClick={this.props.onClick}>
        <svg className={`btn-icon icon-${this.props.icon} -${this.props.style} -size-${this.props.size}`}>
          <use xlinkHref={`#icon-${this.props.icon}`}></use>
        </svg>
        {btnText}
      </button>
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
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  position: React.PropTypes.string,
  color: React.PropTypes.string
};
