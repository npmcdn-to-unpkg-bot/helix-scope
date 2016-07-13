import React from 'react';

const Map = ({id, showDeleteBtn, onRemoveClick}) => {
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
      {id}
      {showDeleteBtn}
      {deleteBtn}
    </div>
  );
};

Map.propTypes = {
  id: React.PropTypes.number,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func
};

export default Map;
