import React from 'react';
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
      {addMapBtn}
      <MapsListContainer routePath={props.route.path} routeParams={props.routeParams} indicators={props.indicators}/>
      {mapModal}
    </div>
  );
};

MapsPage.propTypes = {
  children: React.PropTypes.element,
  route: React.PropTypes.object,
  routeParams: React.PropTypes.object,
  indicators: React.PropTypes.array,
  disableAddMapBtn: React.PropTypes.bool,
  showAddModal: React.PropTypes.bool,
  onAddClick: React.PropTypes.func
};

export default MapsPage;
