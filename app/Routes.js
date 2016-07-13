import React from 'react';
import {connect} from 'react-redux';
import {IndexRoute, Router, Route} from 'react-router';
import ContainerPage from './containers/pages/ContainerPage';
import HomePage from './containers/pages/HomePage';
import MapsPage from './containers/pages/MapsPage';
import CountriesPage from './components/pages/CountriesPage';
import ComparePage from './components/pages/ComparePage';
import PartnersPage from './components/pages/PartnersPage';
import AboutPage from './components/pages/AboutPage';
import NewsPage from './components/pages/NewsPage';
import ContactPage from './components/pages/ContactPage';

const Routes = ({history}) => {
  return (
    <Router history={history}>
      <Route path="/" component={ContainerPage}>
        <IndexRoute component={HomePage}/>
        <Route path="global-scenarios" component={MapsPage}/>
        <Route path="countries" component={CountriesPage}/>
        <Route path="compare" component={ComparePage}/>
        <Route path="partners" component={PartnersPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="news" component={NewsPage}/>
        <Route path="contact" component={ContactPage}/>
      </Route>
    </Router>
  );
};

Routes.propTypes = {
  history: React.PropTypes.object
};

export default connect()(Routes);
