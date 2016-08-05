'use strict';

import {
  SET_MODAL
} from '../actions/modal';

const initialState = {
  open: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL: {
      return Object.assign({}, state, {
        open: action.payload
      });
    }
    default:
      return state;
  }
}
