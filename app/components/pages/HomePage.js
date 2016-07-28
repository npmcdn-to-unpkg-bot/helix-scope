import React, {Component} from 'react';
import SliderHome from '../common/SliderHome';
import FooterHome from '../common/FooterHome';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SliderHome {...this.props}/>
        <FooterHome/>
      </div>
    );
  }
}

export default HomePage;
