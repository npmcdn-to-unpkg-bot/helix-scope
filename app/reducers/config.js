'use strict';

import {
  LOAD_CONFIG, RECEIVE_CONFIG
} from '../actions/config';

const initialState = {
  loading: true
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
        ...action
      });
    }
    default:
      return state;
  }
}
