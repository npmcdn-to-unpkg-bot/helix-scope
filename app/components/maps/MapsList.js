import React from 'react';
import Map from './Map';

const MapsList = props => {
  return (
    <div>
      <h3>{props.place}</h3>
        {props.maps.map((map, index) =>
          <Map {...map} {...props} showDeleteBtn={props.maps.length > 1} key={index} index={index}/>
        )}
    </div>
  );
};

MapsList.propTypes = {
  maps: React.PropTypes.array,
  place: React.PropTypes.string
};

export default MapsList;
