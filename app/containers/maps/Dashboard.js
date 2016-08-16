import {connect} from 'react-redux';
import Dashboard from '../../components/maps/Dashboard';

const mapStateToProps = state => {
  return {
    scenarios: state.config.scenarios,
    categories: state.config.categories
  };
};

export default connect(mapStateToProps, null)(Dashboard);
