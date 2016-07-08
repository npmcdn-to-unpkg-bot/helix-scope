import React from 'react';
import {connect} from 'react-redux';
import {IndexRoute, Router, Route} from 'react-router';
import ContainerPage from './containers/pages/ContainerPage';
import HomePage from './components/pages/HomePage';
import ScenariosPage from './components/pages/ScenariosPage';
import CountriesPage from './components/pages/CountriesPage';
import ComparePage from './components/pages/ComparePage';

const Routes = ({history}) => {
  console.log(history);
  return (
    <Router history={history}>
      <Route path="/" component={ContainerPage}>
        <IndexRoute component={HomePage} />
        <Route path="scenarios" component={ScenariosPage} />
        <Route path="countries" component={CountriesPage} />
        <Route path="compare" component={ComparePage} />
      </Route>
    </Router>
  );
};

export default connect()(Routes);
