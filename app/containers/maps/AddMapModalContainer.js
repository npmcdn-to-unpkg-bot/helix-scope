import {connect} from 'react-redux';
import MapsPage from '../../components/maps/AddMapModal';
import {
  addMap
} from '../../actions/maps';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onAddClick: () => {
    dispatch(addMap());
    this.props.history.push('/some/path');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
