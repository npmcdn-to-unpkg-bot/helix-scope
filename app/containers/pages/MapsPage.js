import {connect} from 'react-redux';
import MapsPage from '../../components/pages/MapsPage';
import {
  addMap
} from '../../actions/maps';

const mapStateToProps = () => {
  return {
    // maps: state
  };
};

const mapDispatchToProps = dispatch => ({
  onAddClick: () => {
    dispatch(addMap());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
