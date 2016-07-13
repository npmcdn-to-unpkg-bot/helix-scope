import React from 'react';
import Map from '../common/Map';
import NavLink from '../common/NavLink';

export default props => {
  return (
    <div>
      Scenarios
      <ul>
        <li>
          <NavLink to="/scenarios/18.16495/-175.93939" onlyActiveOnIndex={true}>Sea</NavLink>
        </li>
        <li>
          <NavLink to="/scenarios/65.42272/-68.31792">Land</NavLink>
        </li>
        <li>
          <NavLink to="/scenarios/-73.64323/-40.40495">Random</NavLink>
        </li>
      </ul>
      <Map lat={props.params.lat} lng={props.params.lng} />
    </div>
  );
};
