import React from 'react';

const AddMapModal = ({selectedIndicators,
                      indicatorsCategories,
                      scenarios,
                      selectedScenario,
                      onAddClick,
                      onHideModal,
                      onScenarioChange,
                      onIndicatorsCategoryChange,
                      onIndicatorChange}) => {
  return (
    <div className="map-modal">
      <button onClick={onHideModal}>Close</button>
      <h2>Add Scenario</h2>
      <div>
      {scenarios.map(scenario =>
        <label key={scenario}>
          <input
            name="scenario"
            type="radio"
            value={scenario}
            checked={scenario === selectedScenario}
            onChange={onScenarioChange}
            />
          {scenario}°C
        </label>
      )}
      </div>
      <div>
        <p>Indicator categories:</p>
        {indicatorsCategories.map(indicatorsCategory =>
          <div key={indicatorsCategory.slug} onClick={onIndicatorsCategoryChange} data-slug={indicatorsCategory.slug}>
            {indicatorsCategory.title}
          </div>
        )}
      </div>
      <div>
        <p>Indicators:</p>
        {selectedIndicators.map(indicator =>
          <div key={indicator.slug} onClick={onIndicatorChange} data-slug={indicator.slug}>
            {indicator.title}
          </div>
        )}
      </div>
      <button onClick={onAddClick}>Explore</button>
    </div>
  );
};

AddMapModal.propTypes = {
  selectedIndicators: React.PropTypes.array,
  indicatorsCategories: React.PropTypes.array,
  scenarios: React.PropTypes.array,
  selectedScenario: React.PropTypes.string,
  onAddClick: React.PropTypes.func,
  onHideModal: React.PropTypes.func,
  onScenarioChange: React.PropTypes.func,
  onIndicatorsCategoryChange: React.PropTypes.func,
  onIndicatorChange: React.PropTypes.func
};

export default AddMapModal;
