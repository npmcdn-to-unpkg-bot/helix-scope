import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  render() {
    let deleteBtn;
    const {onRemoveClick, index, id, scenario, indicator, showDeleteBtn} = {...this.props};

    if (showDeleteBtn) {
      deleteBtn = (
        <button
          onClick={function() {
            onRemoveClick(index);
          }}
          >
        remove
        </button>
      );
    }
    return (
      <div>
        <div id={`map${id}`} className="map"></div>
        {scenario}deg. C, {indicator.title} ({indicator.categorySlug})
        {deleteBtn}
      </div>
   );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.place[0] !== this.props.place[0] || nextProps.place[1] !== this.props.place[1] || nextProps.place[2] !== this.props.place[2]) {
      this.map.setView([nextProps.place[0], nextProps.place[1]], nextProps.place[2]);
    }
  }

  componentDidMount() {
    this.map = L.map(`map${this.props.id}`);
    this.map.setView([this.props.place[0], this.props.place[1]], this.props.place[2]);
    this.tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.on('zoomend', zoomend.bind(this));
    function zoomend(e) {
      this.props.onMapDrag(e.target.getCenter(), e.target.getZoom());
    }
    this.map.on('dragend', dragend.bind(this));
    function dragend(e) {
      this.props.onMapDrag(e.target.getCenter(), e.target.getZoom());
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }
}

Map.propTypes = {
  place: React.PropTypes.array,
  id: React.PropTypes.string,
  index: React.PropTypes.number,
  scenario: React.PropTypes.string,
  indicator: React.PropTypes.object,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func,
  onMapDrag: React.PropTypes.func
};

export default Map;
