'use strict';
import {browserHistory} from 'react-router';
import buildRoute from '../util/buildRoute';

export const SET_SCENARIO = 'SET_SCENARIO';
export const SET_INDICATORS_CATEGORY = 'SET_INDICATORS_CATEGORY';
export const SET_INDICATOR = 'SET_INDICATOR';

export function setScenario(selectedScenario) {
  return {
    type: SET_SCENARIO,
    selectedScenario
  };
}

export function setIndicatorsCategory(selectedIndicatorCategorySlug) {
  return {
    type: SET_INDICATORS_CATEGORY,
    selectedIndicatorCategorySlug
  };
}

export function setIndicator(selectedIndicatorSlug) {
  return {
    type: SET_INDICATOR,
    selectedIndicatorSlug
  };
}

const getMapsFromURL = (params, indicators) => {
  const maps = [];
  for (let i = 0; i < 4; i++) {
    const indicatorSlug = params[`indicator${i}`];
    if (indicatorSlug) {
      maps.push({
        indicator: (indicators) ? indicators.find(indicator => indicator.slug === indicatorSlug) : {slug: indicatorSlug},
        scenario: params[`scenario${i}`] || 2
      });
      continue;
    }
    break;
  }
  return maps;
};

const getPlaceFromURL = place => {
  return place && place.split('-')[0];
};

export const getStateFromURL = (routeParams, indicators) => {
  return {
    maps: getMapsFromURL(routeParams, indicators),
    place: getPlaceFromURL(routeParams.place),
    addMap: routeParams.addMap === 'addMap'
  };
};

const getURLFromView = (routePath, maps, place, showAddModal) => {
  const urlTokens = {
    addMap: (showAddModal) ? 'addMap' : '-',
    place
  };
  maps.forEach((map, i) => {
    urlTokens[`indicator${i}`] = map.indicator.slug;
    urlTokens[`scenario${i}`] = map.scenario;
  });
  return buildRoute(routePath, urlTokens);
};

export function removeMap(mapIndex, routeParams, routePath) {
  return (dispatch, getState) => {
    const state = getStateFromURL(routeParams, getState().config.indicators);
    state.maps.splice(mapIndex, 1);
    browserHistory.push(getURLFromView(routePath, state.maps, state.place));
  };
}

export function addMap(routeParams, routePath) {
  return (dispatch, getState) => {
    const state = getStateFromURL(routeParams, getState().config.indicators);
    const mapConfig = getState().mapConfig;
    state.maps.push({
      indicator: {slug: mapConfig.selectedIndicatorSlug},
      scenario: mapConfig.selectedScenario
    });
    if (!state.place) {
      state.place = 'world';
    }
    browserHistory.push(getURLFromView(routePath, state.maps, state.place));
  };
}

export function showAddMapModal(routeParams, routePath) {
  return () => {
    const state = getStateFromURL(routeParams);
    browserHistory.push(getURLFromView(routePath, state.maps, state.place, true));
  };
}

export function hideAddMapModal(routeParams, routePath) {
  return () => {
    const state = getStateFromURL(routeParams);
    browserHistory.push(getURLFromView(routePath, state.maps, state.place));
  };
}
