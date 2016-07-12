import React from 'react';
import {Link} from 'react-router';
import MapsListContainer from '../../containers/maps/MapsListContainer';

const MapsPage = props => {
  return (
    <div>
      <Link to="global-scenarios/add" disabled={props.disableAddMapBtn}>Add</Link>
      <MapsListContainer/>
      {/* add modal */}
      {props.children}
    </div>
  );
};

MapsPage.propTypes = {
  children: React.PropTypes.element,
  disableAddMapBtn: React.PropTypes.bool
};

export default MapsPage;
