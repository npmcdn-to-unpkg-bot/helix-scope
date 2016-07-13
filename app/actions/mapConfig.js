'use strict';

export const SET_SCENARIO = 'SET_SCENARIO';
export const SET_INDICATORS_CATEGORY = 'SET_INDICATORS_CATEGORY';
export const SET_INDICATOR = 'SET_INDICATOR';

export function setScenario(scenarioId) {
  return {
    type: SET_SCENARIO,
    scenarioId
  };
}

export function setIndicatorsCategory(indicatorCategoryId) {
  return {
    type: SET_INDICATORS_CATEGORY,
    indicatorCategoryId
  };
}

export function setIndicator(indicatorId) {
  return {
    type: SET_INDICATOR,
    indicatorId
  };
}
