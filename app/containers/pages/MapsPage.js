import {connect} from 'react-redux';
import MapsPage from '../../components/pages/MapsPage';
import {setParamsFromURL} from '../../actions/maps';

const mapStateToProps = state => {
  return {
    maps: state.maps.mapsList,
    latLng: state.maps.latLng,
    zoom: state.maps.zoom
  };
};

const mapDispatchToProps = dispatch => ({
  setParamsFromURL: params => dispatch(setParamsFromURL(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
