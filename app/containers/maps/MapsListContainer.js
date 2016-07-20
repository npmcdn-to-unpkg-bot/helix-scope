import {connect} from 'react-redux';
import MapsList from '../../components/maps/MapsList';
import {removeMap} from '../../actions/mapConfig';

const mapStateToProps = (state, ownProps) => {
  const URLState = state.mapConfig.getStateFromURL(ownProps.routeParams, ownProps.indicators);
  return {...URLState};
};

const mapDispatchToProps = (dispatch, props) => ({
  onRemoveClick: index => {
    dispatch(removeMap(index, props.routeParams, props.routePath));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsList);
