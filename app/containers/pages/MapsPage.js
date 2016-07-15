import {connect} from 'react-redux';
import MapsPage from '../../components/pages/MapsPage';
import {showAddMapModal} from '../../actions/mapConfig';

const mapStateToProps = (state, ownProps) => {
  const URLState = state.mapConfig.getStateFromURL(ownProps.routeParams);
  return {
    disableAddMapBtn: URLState.maps.length >= 4,
    indicators: state.config.indicators,
    showAddModal: URLState.addMap
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  onAddClick: () => {
    dispatch(showAddMapModal(props.routeParams, props.route.path));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({
    routePath: ownProps.route.path,
    routeParams: ownProps.routeParams
  }, ownProps, stateProps, dispatchProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MapsPage);
