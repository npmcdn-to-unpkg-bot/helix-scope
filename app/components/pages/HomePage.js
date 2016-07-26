import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import NavBar from '../common/NavBar';
import TextCta from '../common/TextCta';

class HomePage extends Component {
  componentWillMount() {
    this.props.onComponentMounted();
  }

  render() {
    const {loading, headlines, currentHeadlineIndex, onNavClick} = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="l-wrap -slide1">
          <NavBar/>
          <div className="text-cta -center">
            {headlines.map((headline, index) =>
              <section
                key={index}
                className={classNames({active: index === currentHeadlineIndex})}
                >
                <h2 className="title">{headline.title}</h2>
                <p className="text">{headline.content}</p>
                <div className="link">
                  <Link to="/global-scenarios">
                    <svg className="icon icon-arrow -icon-circle-orange -light">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                    <span>Find out more</span>
                  </Link>
                </div>
              </section>
            )}
          </div>
          <div className="slider-mission">
            <svg className="icon icon-logo -light">
              <use xlinkHref="#eu-logo"></use>
            </svg>
            <span className="text">HELIX has received funding from the European Union Seventh Framework Programme FP7/2007 - 2013 under grant agreement no 603864</span>
            <img src="images/helixLogo_negative.png" className="icon-logo"/>
          </div>
          <nav className="slider-nav">
            {headlines.map((headline, index) =>
              <button
                key={index}
                onClick={function() {
                  onNavClick(index);
                }}
                className={classNames({active: index === currentHeadlineIndex})}
                >
              </button>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  onComponentMounted: React.PropTypes.func,
  loading: React.PropTypes.bool,
  headlines: React.PropTypes.array,
  currentHeadlineIndex: React.PropTypes.number,
  onNavClick: React.PropTypes.func
};

export default HomePage;
