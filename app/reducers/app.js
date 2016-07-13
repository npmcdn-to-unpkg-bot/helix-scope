'use strict';

import {
  LOAD_CONFIG, RECEIVE_CONFIG
} from '../actions/app';

const initialState = {
  loading: true,
  config: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONFIG: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case RECEIVE_CONFIG: {
      return Object.assign({}, state, {
        loading: false,
        config: action.config
      });
    }
    default:
      return state;
  }
}
