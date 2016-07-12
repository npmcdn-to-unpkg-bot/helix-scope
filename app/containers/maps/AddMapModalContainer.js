import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
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
    browserHistory.push('/global-scenarios');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);
