import React from 'react';
import Map from './Map';

const MapsList = props => {
  const length = props.maps.length;
  const mapClasses = [
    ['map-container -full'],
    ['map-container -horizontal', 'map-container -horizontal'],
    ['map-container -wide', 'map-container -wide', 'map-container -narrow'],
    ['map-container -quarter', 'map-container -quarter', 'map-container -quarter', 'map-container -quarter']
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
