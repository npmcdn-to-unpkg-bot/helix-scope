'use strict';

import {
  SET_SCENARIO, SET_INDICATORS_CATEGORY, SET_INDICATOR
} from '../actions/mapConfig';

const initialState = {
  scenarioId: 0,
  indicatorCategoryId: 0,
  indicatorId: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SCENARIO: {
      return Object.assign({}, state, {
        scenarioId: action.scenarioId
      });
    }
    case SET_INDICATORS_CATEGORY: {
      return Object.assign({}, state, {
        indicatorCategoryId: action.indicatorCategoryId
      });
    }
    case SET_INDICATOR: {
      return Object.assign({}, state, {
        indicatorId: action.indicatorId
      });
    }
    default:
      return state;
  }
}
