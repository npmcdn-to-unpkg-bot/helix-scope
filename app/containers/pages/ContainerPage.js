import {connect} from 'react-redux';
import ContainerPage from '../../components/pages/ContainerPage';

const mapStateToProps = (state, location) => {
  return {
    path: location.location.pathname,
    loading: state.config.loading
  };
};

export default connect(mapStateToProps, null)(ContainerPage);
