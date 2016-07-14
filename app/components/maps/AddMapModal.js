import React from 'react';
import {Link} from 'react-router';

const AddMapModal = ({selectedIndicators,
                      indicatorsCategories,
                      scenarios,
                      scenarioId,
                      onAddClick,
                      onScenarioChange,
                      onIndicatorsCategoryChange,
                      onIndicatorChange}) => {
  return (
    <div>
      <Link to="/global-scenarios">Close</Link>
      <h2>Add Scenario</h2>
      <div>
      {scenarios.map(scenario =>
        <label key={scenario.id}>
          <input
            name="scenario"
            type="radio"
            value={scenario.id}
            selected={scenario.id === scenarioId}
            onChange={onScenarioChange}
            />
          {scenario.value}°C
        </label>
      )}
      </div>
      <div>
        <p>Indicator categories:</p>
        {indicatorsCategories.map(indicatorsCategory =>
          <div key={indicatorsCategory.id} onClick={onIndicatorsCategoryChange} data-id={indicatorsCategory.id}>
            {indicatorsCategory.title}
          </div>
        )}
      </div>
      <div>
        <p>Indicators:</p>
        {selectedIndicators.map(indicator =>
          <div key={indicator.id} onClick={onIndicatorChange} data-id={indicator.id}>
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
  scenarioId: React.PropTypes.number,
  onAddClick: React.PropTypes.func,
  onScenarioChange: React.PropTypes.func,
  onIndicatorsCategoryChange: React.PropTypes.func,
  onIndicatorChange: React.PropTypes.func
};

export default AddMapModal;
