import {connect} from 'react-redux';
import MapsPage from '../../components/maps/AddMapModal';
import {addMap, hideAddMapModal, setScenario, setIndicatorsCategory, setIndicator} from '../../actions/mapConfig';

const mapStateToProps = state => {
  const selectedIndicators = state.config.indicators.filter(indicator => {
    return indicator.categorySlug === state.mapConfig.selectedIndicatorCategorySlug;
  });
  const p = {
    selectedIndicators,
    scenarios: state.config.scenarios,
    indicatorsCategories: state.config.indicatorsCategories,
    selectedScenario: state.mapConfig.selectedScenario
  };
  return p;
};

const mapDispatchToProps = (dispatch, props) => ({
  onAddClick: () => {
    dispatch(addMap(props.routeParams, props.routePath));
  },
  onHideModal: () => {
    dispatch(hideAddMapModal(props.routeParams, props.routePath));
  },
  onScenarioChange: event => {
    dispatch(setScenario(parseInt(event.target.value, 10)));
  },
  onIndicatorsCategoryChange: event => {
    dispatch(setIndicatorsCategory(event.target.dataset.slug));
  },
  onIndicatorChange: event => {
    dispatch(setIndicator(event.target.dataset.slug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
