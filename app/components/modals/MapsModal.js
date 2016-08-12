import React, {Component} from 'react';
import Select from 'react-select';
import Button from '../common/Button';
import Modal from '../common/Modal';

class MapsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Select value settings */
      disabled: false,
      searchable: false,
      clearable: false,
      /* initial state options for modal */
      selectedScenario: this.props.initialScenario,
      selectedCategory: this.props.initialCategory,
      selectedIndicator: this.props.initialIndicator
    };
    this.handleScenarioChange = this.handleScenarioChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleIndicator = this.handleIndicator.bind(this);
  }

  handleScenarioChange(newValue) {
    this.setState({
      selectedScenario: newValue
    });
  }

  handleCategory(newValue) {
    this.setState({
      selectedCategory: newValue.slug,
      selectedIndicator: null
    });
  }

  handleIndicator(newValue) {
    this.setState({
      selectedIndicator: newValue.slug
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedScenario: nextProps.initialScenario,
      selectedCategory: nextProps.initialCategory,
      selectedIndicator: nextProps.initialIndicator
    });
  }

  setMapState() {

  }

  render() {
    const indicators = this.props.indicators;
    const activeIndicators = [];
    for (let i = 0; i < indicators.length; i++) {
      if (indicators[i].categorySlug === this.state.selectedCategory) {
        activeIndicators.push(indicators[i]);
      }
    }

    let indicatorValue = this.state.selectedIndicator;
    if (!indicatorValue && activeIndicators.length > 0) {
      indicatorValue = activeIndicators[0].slug;
    }

    return (
      <div>
        <Modal
          className="maps"
          modalOpen={this.props.mapModalOpen}
          onSetModal={this.props.onSetMapModal}
          btnStyle="dark"
          >
          <div className="title">
            Add Scenario
          </div>
          <div className="scenarios">
          {this.props.scenarios.map((scenario, index) =>
            <div className={`scenario scenario-${scenario.id}`} key={scenario.id}>
              <input
                id={`scenario-${scenario.id}`}
                name="scenario"
                type="radio"
                value={scenario.id}
                checked={scenario.id === this.state.selectedScenario}
                onChange={() => this.handleScenarioChange(scenario.id)}
                />
              <label htmlFor={`scenario-${index}`}>
                {scenario.title}
              </label>
            </div>
          )}
          </div>
          <div className="text">
            Select the variables and type of impacts you would like to explore
          </div>
          <div className="actions">
          </div>
          <div className="c-dropdowns">
            <Select
              options={this.props.categories}
              clearable={this.state.clearable}
              disabled={this.state.disabled}
              value={this.state.selectedCategory}
              onChange={this.handleCategory}
              searchable={this.state.searchable}
              labelKey="title"
              valueKey="slug"
              />
            <Select
              options={activeIndicators}
              clearable={this.state.clearable}
              disabled={this.state.disabled}
              value={indicatorValue}
              onChange={this.handleIndicator}
              searchable={this.state.searchable}
              labelKey="title"
              valueKey="slug"
              />
          </div>
          <Button onClick={() => this.setMapState()} icon="arrow" style="primary" size="large" text="explore" color="dark"/>
        </Modal>
      </div>
    );
  }
}

MapsModal.propTypes = {
  /**
  * Callback when closing or opening modal
  **/
  onSetMapModal: React.PropTypes.func,
  /**
  * Define whether modal is open or not
  **/
  mapModalOpen: React.PropTypes.bool,
  /**
  * Scenarios array for populating modal
  **/
  scenarios: React.PropTypes.array,
  /**
  * Categories array for populating modal
  **/
  categories: React.PropTypes.array,
  /**
  * Indicators array for populating modal
  **/
  indicators: React.PropTypes.array,
  /**
  * Initial value passed to modal when opened
  **/
  initialScenario: React.PropTypes.string,
  /**
  * Initial value passed to modal when opened
  **/
  initialCategory: React.PropTypes.string,
  /**
  * Initial value passed to modal when opened
  **/
  initialIndicator: React.PropTypes.string
};

export default MapsModal;
