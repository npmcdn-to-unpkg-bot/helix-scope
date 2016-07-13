import React from 'react';
import Map from './Map';

const MapsList = props => {
  return (
    <div>
      {props.maps.map(map =>
        <Map {...map} {...props} showDeleteBtn={props.maps.length > 1} key={map.id}/>
      )}
    </div>
  );
};

MapsList.propTypes = {
  maps: React.PropTypes.array
};

export default MapsList;
