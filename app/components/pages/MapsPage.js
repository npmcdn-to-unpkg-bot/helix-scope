import React from 'react';
import MapsListContainer from '../../containers/maps/MapsListContainer';

const MapsPage = props => {
  return (
    <div>
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
