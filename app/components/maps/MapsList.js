import React from 'react';
import Map from './Map';

const MapsList = props => {
  return (
    <div>
      <h3>{props.place}</h3>
        {props.maps.map((map, index) =>
          <Map {...map} {...props} showDeleteBtn={props.maps.length > 1} key={map.id} index={index}/>
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
