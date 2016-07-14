import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import MapsPage from '../../components/maps/AddMapModal';
import {addMap} from '../../actions/maps';
import {setScenario, setIndicatorsCategory, setIndicator} from '../../actions/mapConfig';

const mapStateToProps = state => {
  const selectedIndicators = state.config.indicators.filter(indicator => {
    return indicator.categoryId === state.mapConfig.indicatorCategoryId;
  });
  const p = {
    selectedIndicators,
    scenarios: state.config.scenarios,
    indicatorsCategories: state.config.indicatorsCategories,
    scenarioId: state.mapConfig.scenarioId
  };
  return p;
};

const mapDispatchToProps = dispatch => ({
  onAddClick: () => {
    dispatch(addMap());
    // close the modal by simply navigating back to global-scenarios
    browserHistory.push('/global-scenarios');
  },
  onScenarioChange: event => {
    dispatch(setScenario(parseInt(event.target.value, 10)));
  },
  onIndicatorsCategoryChange: event => {
    dispatch(setIndicatorsCategory(parseInt(event.target.dataset.id, 10)));
  },
  onIndicatorChange: event => {
    dispatch(setIndicator(parseInt(event.target.dataset.id, 10)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
