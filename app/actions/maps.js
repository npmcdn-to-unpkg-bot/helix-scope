'use strict';

export const ADD_MAP = 'ADD_MAP';
export const REMOVE_MAP = 'REMOVE_MAP';

export function addMap() {
  return (dispatch, getState) => {
    const mapConfig = getState().mapConfig;
    dispatch({
      type: ADD_MAP,
      ...mapConfig
    });
  };
}

export function removeMap(mapId) {
  return {
    type: REMOVE_MAP,
    mapId
  };
}
