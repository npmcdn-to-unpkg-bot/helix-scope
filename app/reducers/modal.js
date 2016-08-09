'use strict';

import {
  SET_MODAL
} from '../actions/modal';

const initialState = {
  modalOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL: {
      return Object.assign({}, state, {
        modalOpen: action.payload
      });
    }
    default:
      return state;
  }
}
