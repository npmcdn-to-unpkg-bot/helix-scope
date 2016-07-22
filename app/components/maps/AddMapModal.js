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
      <div className="map-modal-box">
        <button onClick={onHideModal}>
          <svg className="icon icon-close -icon-circle-light -primary">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
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
        <div className="link">
          <button onClick={onAddClick}>
            <svg className="icon icon-arrow -icon-circle-orange -light">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
            <span>
              Explore
            </span>
          </button>
        </div>
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
