import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import MapsPage from '../../components/maps/AddMapModal';
import {addMap} from '../../actions/maps';
import {setScenario, setIndicatorsCategory, setIndicator} from '../../actions/mapConfig';

const mapStateToProps = state => {
  const p = {
    ...state.config,
    ...state.mapConfig
  };
  console.log(p)
  return p;
};

const mapDispatchToProps = dispatch => ({
  onAddClick: () => {
    dispatch(addMap());
    // close the modal by simply navigating back to global-scenarios
    browserHistory.push('/global-scenarios');
  },
  onScenarioChange: event => {
    dispatch(setScenario(parseInt(event.target.value)));
  },
  onIndicatorsCategoryChange: event => {
    dispatch(setIndicatorsCategory(parseInt(event.target.dataset.id)));
  },
  onIndicatorChange: event => {
    dispatch(setIndicator(parseInt(event.target.dataset.id)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
