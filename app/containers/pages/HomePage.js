import {connect} from 'react-redux';
import HomePage from '../../components/pages/HomePage';
import {
  fetchHeadlinesIfNeeded,
  showHeadline
} from '../../actions/headlines';

const mapStateToProps = state => {
  return {
    loading: state.headlines.loading,
    headlines: state.headlines.headlines,
    currentHeadlineIndex: state.headlines.currentHeadlineIndex
  };
};

const mapDispatchToProps = dispatch => ({
  onComponentMounted: () => {
    dispatch(fetchHeadlinesIfNeeded());
  },
  onNavClick: index => {
    dispatch(showHeadline(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
