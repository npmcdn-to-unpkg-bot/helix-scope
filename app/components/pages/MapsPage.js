import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import AddMapModalContainer from '../../containers/maps/AddMapModalContainer';

const MapsPage = props => {
  let mapModal;

  if (props.showAddModal) {
    mapModal = <AddMapModalContainer routePath={props.route.path} routeParams={props.routeParams}/>;
  }

  return (
    <div>
      <div className="-dark">
        {mapModal}
      </div>
      <div className="l-map -dark">
        <button className="map-add" onClick={props.onAddClick} disabled={props.disableAddMapBtn}>
          <svg className="icon icon-plus -icon-circle-orange -light">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
        <MapsListContainer routePath={props.route.path} routeParams={props.routeParams} indicators={props.indicators}/>
      </div>
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
