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
      scenario: 0,
      category: 'climate',
      indicator: null
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleIndicator = this.handleIndicator.bind(this);
  }

  handleCategory(newValue) {
    this.setState({
      category: newValue.slug,
      indicator: null
    });
  }
  handleIndicator(newValue) {
    this.setState({
      indicator: newValue.slug
    });
  }

  render() {
    const indicators = this.props.indicators;
    const activeIndicators = [];
    for (let i = 0; i < indicators.length; i++) {
      if (indicators[i].categorySlug === this.state.category) {
        activeIndicators.push(indicators[i]);
      }
    }

    let indicatorValue = this.state.indicator;
    if (!indicatorValue && activeIndicators.length > 0) {
      indicatorValue = activeIndicators[0].slug;
    }

    return (
      <div>
        <Modal
          className="maps"
          modalOpen={this.props.mapModalOpen}
          handleSetModal={this.props.onSetMapModal}
          btnStyle="dark"
          >
          <div className="title">
            Add Scenario
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
              value={this.state.category}
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
          <Button icon="arrow" style="primary" size="large" text="explore" color="dark"/>
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
  indicators: React.PropTypes.array
};

export default MapsModal;
