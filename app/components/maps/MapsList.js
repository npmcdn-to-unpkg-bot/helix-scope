import React from 'react';
import Map from './Map';

const MapsList = props => {
  const length = props.maps.length;
  const mapClasses = [
    ['full'],
    ['horizontal', 'horizontal'],
    ['wide', 'wide', 'narrow'],
    ['quarter', 'quarter', 'quarter', 'quarter']
  ];

  return (
    <div>
        {props.maps.map((map, index) =>
          <div className={mapClasses[length - 1][index]} key={map.id}>
            <Map {...map} {...props} showDeleteBtn={props.maps.length > 1} index={index}/>
          </div>
        )}
    </div>
  );
};

MapsList.propTypes = {
  maps: React.PropTypes.array,
  place: React.PropTypes.array,
  mapIds: React.PropTypes.array
};

export default MapsList;
