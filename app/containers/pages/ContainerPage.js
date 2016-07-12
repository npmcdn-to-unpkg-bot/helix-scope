import {connect} from 'react-redux';
import ContainerPage from '../../components/pages/ContainerPage';

const mapStateToProps = (state, location) => ({
  path: location.location.pathname
});

export default connect(mapStateToProps, null)(ContainerPage);
