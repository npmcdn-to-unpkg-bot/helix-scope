import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  render() {
    return (
      <div id="map"></div>
   );
  }

  componentWillUpdate(nextProps) {
    this.map.setView([nextProps.lat, nextProps.lng], 2);
  }

  componentDidMount() {
    this.map = L.map('map');
    this.map.setView([this.props.lat, this.props.lng], 2);
    const tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  componentWillUnmount() {
    this.map.remove();
  }
}

export default Map;
