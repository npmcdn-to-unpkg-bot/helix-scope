import {connect} from 'react-redux';
import MapsPage from '../../components/pages/MapsPage';
import {
  addMap
} from '../../actions/maps';

const mapStateToProps = state => {
  return {
    disableAddMapBtn: state.maps.length >= 4
  };
};

export default connect(mapStateToProps, null)(MapsPage);
