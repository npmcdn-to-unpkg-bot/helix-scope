import React from 'react';
import Button from '../common/Button';

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
    <div className="c-add-map-modal">
      <div className="modal-box">
        <Button onAddClick={onHideModal} link="" icon="close" style="light" size="small" position="right"/>
        <h2>Add Scenario</h2>
        <div className="scenarios">
        {scenarios.map((scenario, index) =>
          <div className={`scenario scenario-${index}`} key={scenario}>
            <input
              id={`scenario-${index}`}
              name="scenario"
              type="radio"
              value={scenario}
              checked={scenario === selectedScenario}
              onChange={onScenarioChange}
              />
            <label htmlFor={`scenario-${index}`}>
              {scenario}
            </label>
          </div>
        )}
        </div>
        <div className="text">
          <p>Select the variables and type of impacts you'd like to explore</p>
          {indicatorsCategories.map(indicatorsCategory =>
            <div key={indicatorsCategory.slug} onClick={onIndicatorsCategoryChange} data-slug={indicatorsCategory.slug}>
              {indicatorsCategory.title}
            </div>
          )}
        </div>
        <div className="text">
          <p>Indicators:</p>
          {selectedIndicators.map(indicator =>
            <div key={indicator.slug} onClick={onIndicatorChange} data-slug={indicator.slug}>
              {indicator.title}
            </div>
          )}
        </div>
        <Button onAddClick={onAddClick} link="" icon="arrow" style="primary" size="large" text="explore"/>
      </div>
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
