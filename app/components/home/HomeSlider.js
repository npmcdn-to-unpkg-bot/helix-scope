import React, {Component} from 'react';
import Slider from 'react-slick';
import HomeSlide1 from '../home/HomeSlide1';
import HomeSlide2 from '../home/HomeSlide2';
import HomeSlide3 from '../home/HomeSlide3';
import HomeSlide4 from '../home/HomeSlide4';
import HomeSlide5 from '../home/HomeSlide5';
import HomeSlide6 from '../home/HomeSlide6';

class HomeSlider extends Component {
  render() {
    const settings = {
      className: 'c-slider-home',
      arrows: false,
      autoplay: false,
      dots: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      focusOnSelect: true
    };

    return (
      <div>
        <Slider {...settings}>
          <div key="1" className="slide-1">
            <HomeSlide1 />
          </div>
          <div key="2" className="slide-2">
            <HomeSlide2 />
          </div>
          <div key="3" className="slide-3">
            <HomeSlide3 />
          </div>
          <div key="4" className="slide-4">
            <HomeSlide4 />
          </div>
          <div key="5" className="slide-5">
            <HomeSlide5 />
          </div>
          <div key="6" className="slide-6">
            <HomeSlide6 />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;

HomeSlider.propTypes = {
};
