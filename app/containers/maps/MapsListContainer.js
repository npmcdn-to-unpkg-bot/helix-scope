import {connect} from 'react-redux';
import MapsList from '../../components/maps/MapsList';
import {
  removeMap
} from '../../actions/maps';

const mapStateToProps = state => {
  return {
    maps: state.maps
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveClick: mapId => {
    dispatch(removeMap(mapId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsList);
