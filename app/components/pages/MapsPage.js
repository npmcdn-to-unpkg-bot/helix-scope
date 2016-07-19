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
      <div className="maps-container bg-dark">
        <button className="add-map" onClick={props.onAddClick} disabled={props.disableAddMapBtn}>
          <svg className="icon icon-plus icon-circle -light">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
        <MapsListContainer/>
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
