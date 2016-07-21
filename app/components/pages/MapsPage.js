import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Map from '../common/Map';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import AddMapModalContainer from '../../containers/maps/AddMapModalContainer';

const MapsPage = props => {
  let addMapBtn;
  if (props.disableAddMapBtn === false) {
    addMapBtn = <button onClick={props.onAddClick}>Add</button>;
  }

  let mapModal;

  if (props.showAddModal) {
    mapModal = <AddMapModalContainer routePath={props.route.path} routeParams={props.routeParams}/>;
  }

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
        <Map lat={props.params.lat} lng={props.params.lng}/>
        <Footer className="l-footer"/>
      </div>
      {addMapBtn}
      <MapsListContainer routePath={props.route.path} routeParams={props.routeParams} indicators={props.indicators}/>
      {mapModal}
    </div>
  );
};

MapsPage.propTypes = {
  onAddClick: React.PropTypes.func,
  disableAddMapBtn: React.PropTypes.bool,
  params: React.PropTypes.object,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  route: React.PropTypes.object,
  routeParams: React.PropTypes.object,
  indicators: React.PropTypes.array,
  showAddModal: React.PropTypes.bool
};

export default MapsPage;
