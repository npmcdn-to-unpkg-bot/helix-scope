import React from 'react';
import Header from '../common/Header';

class ContainerPage extends React.Component {

  getChildContext() {
    const location = this.props.location;
    location.params = this.props.params;
    return { location }
  }

  render() {
    if (this.props.loading) {
      return (
        <p>loading</p>
      );
    }
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
};

ContainerPage.childContextTypes = {
  location: React.PropTypes.object
};

ContainerPage.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool
};

export default ContainerPage;
