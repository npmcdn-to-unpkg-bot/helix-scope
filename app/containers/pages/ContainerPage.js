import {connect} from 'react-redux';
import ContainerPage from '../../components/pages/ContainerPage';

import {setModal} from '../../actions/modal';

const mapStateToProps = (state, location) => {
  return {
    path: location.location.pathname,
    loading: state.config.loading,
    modalOpen: state.modal.modalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  setModal: status => {
    dispatch(setModal(status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
