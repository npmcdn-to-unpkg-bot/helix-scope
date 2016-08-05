import React, {Component} from 'react';
import Map from './Map';

class MapsList extends Component {
  render(){
    const length = this.props.maps.length;
    const mapClasses = [
      ['-full'],
      ['-horizontal', '-horizontal'],
      ['-wide', '-wide', '-narrow'],
      ['-quarter', '-quarter', '-quarter', '-quarter']
    ];
    const mapsArray = [{
      id: "0",
      indicator: {
        categorySlug:"climate",
        slug:"avg-precipitation",
        title:"Avg Precipitation (mm/month)",
        scenario:"4°C"
      }
    }]
    const getMapsFromURL = (params, indicators) => {
      const maps = [];
      for (let i = 0; i < 4; i++) {
        const indicatorSlug = params[`indicator${i}`];
        if (indicatorSlug) {
          maps.push({
            indicator: (indicators) ? indicators.find(indicator => indicator.slug === indicatorSlug) : {slug: indicatorSlug},
            scenario: params[`scenario${i}`] || 2,
            id: params[`id${i}`]
          });
          continue;
        }
        break;
      }
      return maps;
    };

    const mapsFromContext = getMapsFromURL(this.context.location.params, this.props.indicators)
    return (
      <div className="l-maps-container">
          {mapsFromContext.map((map, index) =>
            <div className={`c-maps-list ${mapClasses[length - 1][index]}`} key={map.id}>
              <Map {...map} {...this.props} showDeleteBtn={this.props.maps.length > 1} index={index} />
            </div>
          )}
      </div>
    );
  }
};

MapsList.contextTypes = {
  location: React.PropTypes.object
};

MapsList.propTypes = {
  maps: React.PropTypes.array,
  place: React.PropTypes.array,
  mapIds: React.PropTypes.array
};

export default MapsList;
