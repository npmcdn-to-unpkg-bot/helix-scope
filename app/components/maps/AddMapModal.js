import React from 'react';
import {Link} from 'react-router';

const AddMapModal = ({indicators,
                      indicatorsCategories,
                      scenarios,
                      scenarioId,
                      onAddClick,
                      onScenarioChange,
                      onIndicatorsCategoryChange}) => {
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
      {indicatorsCategories.map(indicatorsCategory =>
        <div key={indicatorsCategory.id} onClick={onIndicatorsCategoryChange} data-id={indicatorsCategory.id}>
          {indicatorsCategory.title}
        </div>
      )}
      </div>
      <button onClick={onAddClick}>add map</button>
    </div>
  );
};

AddMapModal.propTypes = {
  indicators: React.PropTypes.array,
  indicatorsCategories: React.PropTypes.array,
  scenarios: React.PropTypes.array,
  scenarioId: React.PropTypes.number,
  onAddClick: React.PropTypes.func,
  onScenarioChange: React.PropTypes.func,
  onIndicatorsCategoryChange: React.PropTypes.func
};

export default AddMapModal;
