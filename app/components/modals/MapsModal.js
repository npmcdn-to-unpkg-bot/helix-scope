import React, {Component} from 'react';
import Select from 'react-select';
import Button from '../common/Button';
import Modal from '../common/Modal';

class MapsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapModalOpen: true,
      category: null,
      disabled: false,
      searchable: false,
      selectValue: null,
      clearable: false
    };
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal(e) {
    this.setState({
      mapModalOpen: e.value
    });
  }

  render() {
    return (
      <div>
        <Modal
          className="maps"
          modalOpen={this.state.mapModalOpen}
          handleSetModal={() => this.onCloseModal(false)}
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
              options={this.props.indicatorsCategories}
              clearable={this.state.clearable}
              disabled={this.state.disabled}
              value={this.state.category}
              onChange={this.handleCategory}
              searchable={this.state.searchable}
              labelKey="title"
              valueKey="slug"
              />
            <Select
              options={this.props.selectedIndicators}
              clearable={this.state.clearable}
              disabled={this.state.disabled}
              value={this.state.selectValue}
              onChange={this.handleIndicator}
              searchable={this.state.searchable}
              labelKey="title"
              valueKey="slug"
              />
            <Select
              options={this.props.selectedIndicators}
              clearable={this.state.clearable}
              disabled={this.state.disabled}
              value={this.state.selectValue}
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
  * Define whether modal is open or not
  **/
  mapModalOpen: React.PropTypes.bool,
  /**
  * Callback when closing or opening modal
  **/
  onCloseModal: React.PropTypes.func
};

export default MapsModal;
