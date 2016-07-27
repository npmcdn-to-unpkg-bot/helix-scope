import React, {Component} from 'react';

class FooterHome extends Component {
  render() {
    return (
      <div>
        <div className="c-footer-home">
          <svg className="icon icon-logo -light">
            <use xlinkHref="#eu-logo"></use>
          </svg>
          <span className="text">HELIX has received funding from the European Union Seventh Framework Programme FP7/2007 - 2013 under grant agreement no 603864</span>
          <img src="images/helixLogo_negative.png" className="icon-logo"/>
        </div>
      </div>
    );
  }
}

export default FooterHome;
