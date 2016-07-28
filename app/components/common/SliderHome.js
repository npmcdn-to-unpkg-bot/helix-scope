import React, {Component} from 'react';
import Slider from 'react-slick';
import TextCta from '../common/TextCta';

class SliderNav extends Component {
  componentWillMount() {
    this.props.onComponentMounted();
  }
  render() {
    const settings = {
      className: 'c-slider-home',
      arrows: false,
      autoplay: true,
      dots: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      focusOnSelect: true
    };
    const {loading, headlines} = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Slider {...settings}>
            {headlines.map((headline, index) =>
              <div key={index} className={`slide-${index}`}>
                <TextCta title={headline.title} content={headline.content} link={headline.link} text={headline.text}/>
              </div>
            )}
        </Slider>
      </div>
    );
  }
}

export default SliderNav;

SliderNav.propTypes = {
  onComponentMounted: React.PropTypes.func,
  loading: React.PropTypes.bool,
  headlines: React.PropTypes.array,
  currentHeadlineIndex: React.PropTypes.number,
  onNavClick: React.PropTypes.func
};
