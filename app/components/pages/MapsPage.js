import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import AddMapModalContainer from '../../containers/maps/AddMapModalContainer';
import Button from '../common/Button';

const MapsPage = props => {
  let mapModal;

  if (props.showAddModal) {
    mapModal = <AddMapModalContainer routePath={props.route.path} routeParams={props.routeParams}/>;
  }

  return (
    <div className="-dark">
      {mapModal}
      <div className="c-add-map">
        <Button link="/global-scenarios/addMap" icon="plus-big" style="primary" size="large" onAddClick={props.onAddClick} disabled={props.disableAddMapBtn}/>
      </div>
      <MapsListContainer routePath={props.route.path} routeParams={props.routeParams} indicators={props.indicators}/>
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
