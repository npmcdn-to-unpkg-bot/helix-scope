'use strict';

import {
  ADD_MAP, REMOVE_MAP
} from '../actions/maps';

const map = (state, action) => {
  switch (action.type) {
    case ADD_MAP: {
      console.log(action);
      return {
        id: action.mapId,
        scenarioId: action.scenarioId,
        indicatorId: action.indicatorId
      };
    }
    default: {
      return state;
    }
  }
};

let currentMapId = 0;

const maps = (state = [], action) => {
  switch (action.type) {
    case ADD_MAP: {
      action.mapId = currentMapId++;
      return [
        ...state,
        map(undefined, action)
      ];
    }
    case REMOVE_MAP: {
      const index = state.findIndex(map => {
        return map.id === action.mapId;
      });
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    default: {
      return state;
    }
  }
};

export default maps;
