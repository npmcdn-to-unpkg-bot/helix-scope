'use strict';

import {
  SET_SCENARIO, SET_INDICATORS_CATEGORY, SET_INDICATOR, getStateFromURL
} from '../actions/mapConfig';

const initialState = {
  selectedScenario: '2°C',
  selectedIndicatorCategorySlug: 'climate',
  selectedIndicatorSlug: 'avg-precipitation',
  getStateFromURL
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SCENARIO: {
      return Object.assign({}, state, {
        selectedScenario: action.selectedScenario
      });
    }
    case SET_INDICATORS_CATEGORY: {
      return Object.assign({}, state, {
        selectedIndicatorCategorySlug: action.selectedIndicatorCategorySlug
      });
    }
    case SET_INDICATOR: {
      return Object.assign({}, state, {
        selectedIndicatorSlug: action.selectedIndicatorSlug
      });
    }
    default:
      return state;
  }
}
