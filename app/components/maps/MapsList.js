import React from 'react';

const MapsList = ({maps, onRemoveClick}) => {
  return (
    <div>
      {maps.map(map =>
        <div key={map.id}>
          {map.id}
          <button
            onClick={function() {
              onRemoveClick(map.id);
            }}
            >
          remove
          </button>
        </div>
      )}
    </div>
  );
};

MapsList.propTypes = {
  maps: React.PropTypes.array,
  onRemoveClick: React.PropTypes.func
};

export default MapsList;
