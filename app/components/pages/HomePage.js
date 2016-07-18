import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import NavBar from '../common/NavBar';

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
        <div className="navbar-head home-slider">
          <NavBar/>
          <div className="wrap">
            <div className="home-cta">
              {headlines.map((headline, index) =>
                <section
                  key={index}
                  className={classNames({active: index === currentHeadlineIndex})}
                  >
                  <h2 className="heading">{headline.title}</h2>
                  <p className="text">{headline.content}</p>
                  <Link className="link" to="/scenarios">
                    <svg className="icon icon-arrow-orange -light">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                    <span>Find out more</span>
                  </Link>
                </section>
              )}
              <div className="slider-footer">
                <svg className="icon icon-logo -light">
                  <use xlinkHref="#eu-logo"></use>
                </svg>
                <span className="text">HELIX has received funding from the European Union Seventh Framework Programme FP7/2007 - 2013 under grant agreement no 603864</span>
                <img src="images/helixLogo_negative.png" className="logo-footer"/>
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
