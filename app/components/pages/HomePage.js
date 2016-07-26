import React, {Component} from 'react';
import classNames from 'classnames';
import NavBar from '../common/NavBar';
import TextCta from '../common/TextCta';
import Slider from '../common/Slider';

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
          {headlines.map((headline, index) =>
            <div key={index}>
              <TextCta title={headline.title} content={headline.content} link={headline.link}/>
            </div>
          )}
          <Slider/>
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
