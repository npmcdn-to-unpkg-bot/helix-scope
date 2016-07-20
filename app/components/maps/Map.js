import React from 'react';

const Map = ({index, scenario, indicator, showDeleteBtn, onRemoveClick}) => {
  let deleteBtn;
  if (showDeleteBtn) {
    deleteBtn = (
      <button
        onClick={function() {
          onRemoveClick(index);
        }}
        >
      remove
      </button>
    );
  }

  return (
    <div>
      {scenario}deg. C, {indicator.title} ({indicator.categorySlug})
      {deleteBtn}
    </div>
  );
};

Map.propTypes = {
  index: React.PropTypes.number,
  scenario: React.PropTypes.string,
  indicator: React.PropTypes.object,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func
};

export default Map;
