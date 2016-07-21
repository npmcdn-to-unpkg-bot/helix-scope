import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  render() {
    let deleteBtn;
    const {onRemoveClick, index, id, scenario, indicator, showDeleteBtn} = {...this.props};

    if (showDeleteBtn) {
      deleteBtn = (
        <button
          className="remove-map"
          onClick={function() {
            onRemoveClick(index);
          }}
          >
          <svg className="icon icon-close -icon-circle-light -primary">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      );
    }
    return (
      <div className="map-tile">
        <div className="map-sidebar">
          <div className="head">
            <span className="scenario">{scenario}</span>
            <svg className="icon icon-settings -primary">
              <use xlinkHref="#icon-settings"></use>
            </svg>
            {deleteBtn}
          </div>
          <h4>BIODIVERSITY</h4>
          <span className="indicator">{indicator.title}</span>
          <form action="" className="model-select">
            <label>
              <input type="checkbox" name="model" value="Model 1"/>
              Model 1
            </label>
            <label>
              <input type="checkbox" name="model" value="Model 2"/>
              Model 2
            </label>
            <label>
              <input type="checkbox" name="model" value="Model 2"/>
              Model 3
            </label>
          </form>

        </div>
        <div id={`map${id}`} className="map"></div>
      </div>
   );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.place[0] !== this.props.place[0] || nextProps.place[1] !== this.props.place[1] || nextProps.place[2] !== this.props.place[2]) {
      this.map.setView([nextProps.place[0], nextProps.place[1]], nextProps.place[2]);
      this.map.invalidateSize();
    }
  }

  componentDidMount() {
    this.map = L.map(`map${this.props.id}`);
    this.map.setView([this.props.place[0], this.props.place[1]], this.props.place[2]);
    this.map.zoomControl.setPosition('topright');
    this.tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.on('zoomend', zoomend.bind(this));
    this.map.scrollWheelZoom.disable();
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
