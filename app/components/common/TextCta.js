import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class TextCta extends Component {
  render() {
    const {headlines, currentHeadlineIndex} = this.props;
    return (
      <div>
        <div className="text-cta -center">
          {headlines.map((headline, index) =>
            <section
              key={index}
              className={classNames({active: index === currentHeadlineIndex})}
              >
              <h2 className="title">{headline.title}</h2>
              <p className="text">{headline.content}</p>
              <div className="link">
                <Link to={headline.link}>
                  <svg className="icon icon-arrow -icon-circle-orange -light">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                  <span>Find out more</span>
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default TextCta;

TextCta.propTypes = {
  headlines: React.PropTypes.array,
  currentHeadlineIndex: React.PropTypes.number
};
