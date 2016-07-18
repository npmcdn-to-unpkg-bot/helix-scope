import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Map from '../common/Map';
import NavLink from '../common/NavLink';

const MapsPage = props => {
  return (
    <div>
      <div className="navbar-head bg-dark">
        <NavBar/>
      </div>
      <div className="bg-dark">
        <button onClick={props.onAddClick} disabled={props.disableAddMapBtn}>add map</button>
        <MapsListContainer/>
        <ul>
          <li>
            <NavLink to="/scenarios/18.16495/-175.93939" onlyActiveOnIndex={Boolean(true)}>Sea</NavLink>
          </li>
          <li>
            <NavLink to="/scenarios/65.42272/-68.31792">Land</NavLink>
          </li>
          <li>
            <NavLink to="/scenarios/-73.64323/-40.40495">Random</NavLink>
          </li>
        </ul>
        <Map lat={props.params.lat} lng={props.params.lng}/>
        <Footer className="l-footer"/>
      </div>
    </div>
  );
};

MapsPage.propTypes = {
  onAddClick: React.PropTypes.func,
  disableAddMapBtn: React.PropTypes.bool,
  params: React.PropTypes.object,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number
};

export default MapsPage;
