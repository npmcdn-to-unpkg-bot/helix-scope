import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import Button from '../common/Button';

class MapsPage extends React.Component {

  componentDidMount() {
    const {query} = this.context.location;

    if (query && query.maps) {
      this.props.setParamsFromURL(query.maps);
    }
  }

  render() {
    return (
      <div className="-dark">
        <div className="c-add-map">
          <Button
            link="/global-scenarios/addMap"
            icon="plus-big"
            style="primary"
            size="large"
            onAddClick={this.props.onAddClick}
            disabled={this.props.disableAddMapBtn}
            />
        </div>
        <MapsListContainer
          maps={this.props.maps}
          latLng={this.props.latLng}
          zoom={this.props.zoom}
          />
      </div>
    );
  }
}

MapsPage.contextTypes = {
  location: React.PropTypes.object
};

MapsPage.propTypes = {
  onAddClick: React.PropTypes.func,
  disableAddMapBtn: React.PropTypes.bool,
  setParamsFromURL: React.PropTypes.func,
  maps: React.PropTypes.array,
  latLng: React.PropTypes.object,
  zoom: React.PropTypes.number
};

export default MapsPage;
