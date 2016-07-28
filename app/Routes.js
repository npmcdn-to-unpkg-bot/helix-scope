import React from 'react';
import {connect} from 'react-redux';
import {IndexRoute, Router, Route} from 'react-router';
import ContainerPage from './containers/pages/ContainerPage';
import HomePage from './containers/pages/HomePage';
import MapsPage from './containers/pages/MapsPage';
import CountriesPage from './containers/pages/CountriesPage';
import ComparePage from './components/pages/ComparePage';
import PartnersPage from './components/pages/PartnersPage';
import AboutPage from './components/pages/AboutPage';
import NewsPage from './components/pages/NewsPage';
import ContactPage from './components/pages/ContactPage';
import ScenariosPage from './components/pages/ScenariosPage';

const Routes = ({history}) => {
  return (
    <Router history={history}>
      <Route path="/" component={ContainerPage}>
        <IndexRoute component={HomePage}/>
        <Route path="/global-scenarios(/:addMap)(/:place)(/:indicator0)(/:scenario0)(/:id0)(/:indicator1)(/:scenario1)(/:id1)(/:indicator2)(/:scenario2)(/:id2)(/:indicator3)(/:scenario3)(/:id3)" component={MapsPage}/>
        <Route path="scenarios" component={ScenariosPage}/>
        <Route path="scenarios/:lat/:lng" component={ScenariosPage}/>
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
