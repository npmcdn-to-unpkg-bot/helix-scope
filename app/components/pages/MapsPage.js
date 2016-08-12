import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import Button from '../common/Button';
import MapsModal from '../modals/MapsModal';

class MapsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapModalOpen: true,
      initialScenario: '0',
      initialCategory: 'climate',
      initialIndicator: null
    };
    this.handleSetMapModal = this.handleSetMapModal.bind(this);
  }

  handleSetMapModal(status) {
    this.setState({
      mapModalOpen: status
    });
  }

  componentDidMount() {
    const {query} = this.context.location;

    if (query && query.maps) {
      this.props.setParamsFromURL(query.maps);
    }
  }

  render() {
    return (
      <div className="-dark">
        <div className="c-add-map">
          <Button
            icon="plus-big"
            style="primary"
            size="large"
            onClick={() => this.handleSetMapModal(true)}
            />
        </div>
        <MapsListContainer
          maps={this.props.maps}
          latLng={this.props.latLng}
          zoom={this.props.zoom}
          />
        <MapsModal
          mapModalOpen={this.state.mapModalOpen}
          onSetMapModal={this.handleSetMapModal}
          scenarios={this.props.scenarios}
          categories={this.props.categories}
          indicators={this.props.indicators}
          initialScenario={this.state.initialScenario}
          initialCategory={this.state.initialCategory}
          initialIndicators={this.state.initialIndicators}
          />
      </div>
    );
  }
}

MapsPage.contextTypes = {
  location: React.PropTypes.object
};

MapsPage.propTypes = {
  onSetMapModal: React.PropTypes.func,
  setParamsFromURL: React.PropTypes.func,
  maps: React.PropTypes.array,
  latLng: React.PropTypes.object,
  zoom: React.PropTypes.number,
  scenarios: React.PropTypes.array,
  categories: React.PropTypes.array,
  indicators: React.PropTypes.array
};

export default MapsPage;
