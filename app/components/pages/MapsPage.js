import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';
import NavBar from '../common/NavBar';

const MapsPage = props => {
  return (
    <div>
      <div className="navbar-head">
        <NavBar/>
      </div>
      <button onClick={props.onAddClick} disabled={props.disableAddMapBtn}>add map</button>
      <MapsListContainer/>
    </div>
  );
};

MapsPage.propTypes = {
  onAddClick: React.PropTypes.func,
  disableAddMapBtn: React.PropTypes.bool
};

export default MapsPage;
