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
          <div className="home-cta">
            {headlines.map((headline, index) =>
              <section
                key={index}
                className={classNames({active: index === currentHeadlineIndex})}
                >
                <h2 className="heading">{headline.title}</h2>
                <p className="text">{headline.content}</p>
                <Link className="link" to="/scenarios">Find out more</Link>
              </section>
            )}
          </div>
        </div>
        <nav>
          {headlines.map((headline, index) =>
            <button
              key={index}
              onClick={function() {
                onNavClick(index);
              }}
              className={classNames({active: index === currentHeadlineIndex})}
              >
              {headline.title}
            </button>
          )}
        </nav>
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
