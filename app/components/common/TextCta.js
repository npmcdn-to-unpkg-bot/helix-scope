import React, {Component} from 'react';
import Button from './Button';

class TextCta extends Component {
  render() {
    return (
      <div>
        <div className="text-cta -center">
          <section>
            <h2 className="title">{this.props.title}</h2>
            <p className="text">{this.props.content}</p>
            <Button icon="arrow" style="primary" size="large" link={this.props.link} text="Find out more"/>
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
