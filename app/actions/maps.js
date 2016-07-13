'use strict';

export const ADD_MAP = 'ADD_MAP';
export const REMOVE_MAP = 'REMOVE_MAP';

export function addMap() {
  return {
    type: ADD_MAP
  };
}

export function removeMap(mapId) {
  return {
    type: REMOVE_MAP,
    mapId
  };
}
