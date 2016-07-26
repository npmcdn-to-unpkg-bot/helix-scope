import React, {Component} from 'react';
import {Link} from 'react-router';

class TextCta extends Component {
  render() {
    return (
      <div>
        <div className="text-cta -center">
          <section>
            <h2 className="title">{this.props.title}</h2>
            <p className="text">{this.props.content}</p>
            <div className="link">
              <Link to={this.props.link}>
                <svg className="icon icon-arrow -icon-circle-orange -light">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
                <span>Find out more</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TextCta;

TextCta.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  link: React.PropTypes.string,
  index: React.PropTypes.number
};
