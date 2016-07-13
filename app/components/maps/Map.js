import React from 'react';

const Map = ({id, scenarioId, showDeleteBtn, onRemoveClick}) => {
  let deleteBtn;
  if (showDeleteBtn) {
    deleteBtn = (
      <button
        onClick={function() {
          onRemoveClick(id);
        }}
        >
      remove
      </button>
    );
  }

  return (
    <div>
      {id}, {scenarioId}, {indicatorId}
      {deleteBtn}
    </div>
  );
};

Map.propTypes = {
  id: React.PropTypes.number,
  scenarioId: React.PropTypes.number,
  indicatorId: React.PropTypes.number,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func
};

export default Map;
