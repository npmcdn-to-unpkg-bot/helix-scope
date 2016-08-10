import {connect} from 'react-redux';
import MapsList from '../../components/maps/MapsList';
import {panMaps, updateURL, setMap} from '../../actions/maps';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onMapDrag: params => {
    dispatch(panMaps(params));
    dispatch(updateURL());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsList);
