'use strict';
import {browserHistory} from 'react-router';
import {push} from 'react-router-redux';
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
        scenario: params[`scenario${i}`] || 2,
        id: params[`id${i}`]
      });
      continue;
    }
    break;
  }
  return maps;
};

const getPlaceFromURL = place => {
  if (!place) {
    return [0, 0, 1];
  }
  const placeParts = place.split(',');
  if (placeParts.length === 1) {
    // its a word
    return [55, 41, 1];
  }
  return placeParts.map(placePart => parseFloat(placePart, 10));
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
    urlTokens[`place${i}`] = map.place;
    urlTokens[`indicator${i}`] = map.indicator.slug;
    urlTokens[`scenario${i}`] = map.scenario;
    urlTokens[`id${i}`] = map.id;
  });
  return buildRoute(routePath, urlTokens);
};

const getNextMapId = maps => {
  const maxId = maps.reduce((prev, current) => {
    return Math.max(prev, parseInt(current.id, 10));
  }, -1);
  return maxId + 1;
};

export function addMap(routeParams, routePath) {
  return (dispatch, getState) => {
    let URLstate = getStateFromURL(routeParams, getState().config.indicators);
    const mapConfig = getState().mapConfig;
    URLstate.maps.push({
      indicator: {slug: mapConfig.selectedIndicatorSlug},
      scenario: mapConfig.selectedScenario,
      id: getNextMapId(URLstate.maps)
    });
    if (!URLstate.place) {
      URLstate = getPlaceFromURL();
    }
    browserHistory.push(getURLFromView(routePath, URLstate.maps, URLstate.place));
  };
}

export function removeMap(mapIndex, routeParams, routePath) {
  return (dispatch, getState) => {
    const URLstate = getStateFromURL(routeParams, getState().config.indicators);
    URLstate.maps.splice(mapIndex, 1);
    browserHistory.push(getURLFromView(routePath, URLstate.maps, URLstate.place));
  };
}

export function showAddMapModal(routeParams, routePath) {
  return () => {
    const URLstate = getStateFromURL(routeParams);
    browserHistory.push(getURLFromView(routePath, URLstate.maps, URLstate.place, true));
  };
}

export function hideAddMapModal(routeParams, routePath) {
  return () => {
    const URLstate = getStateFromURL(routeParams);
    browserHistory.push(getURLFromView(routePath, URLstate.maps, URLstate.place));
  };
}

export function panMaps(latlng, zoom, routeParams, routePath) {
  return () => {
    const URLstate = getStateFromURL(routeParams);
    if (latlng.lat !== URLstate.place[0] || latlng.lng !== URLstate.place[1] || zoom !== URLstate.place[2]) {
      URLstate.place = [latlng.lat, latlng.lng, zoom];
      const url = getURLFromView(routePath, URLstate.maps, URLstate.place);
      browserHistory.push(url);
    }
  };
}
