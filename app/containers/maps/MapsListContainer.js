import {connect} from 'react-redux';
import MapsList from '../../components/maps/MapsList';
import {removeMap, panMaps} from '../../actions/mapConfig';

const mapStateToProps = (state, ownProps) => {
  const URLState = state.mapConfig.getStateFromURL(ownProps.routeParams, ownProps.indicators);
  return {...URLState};
};

const mapDispatchToProps = (dispatch, props) => ({
  onRemoveClick: index => {
    dispatch(removeMap(index, props.routeParams, props.routePath));
  },
  onMapDrag: (latlng, zoom) => {
    dispatch(panMaps(latlng, zoom, props.routeParams, props.routePath));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsList);
