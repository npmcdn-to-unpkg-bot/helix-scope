'use strict';

export const SET_MODAL = 'SET_MODAL';

export function setModal(status) {
  return {
    type: SET_MODAL,
    payload: status
  };
}
