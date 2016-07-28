'use strict';
import {browserHistory} from 'react-router';
import buildRoute from '../util/buildRoute';

export const SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST';

export function setCountriesList(data) {
  /* return function(dispatch) {
    $.get('url').then(function(usersActivityData){
      return {
        type: SET_USERS_ACTIVITY_DATA,
        usersActivityData
      }
    })
  }; */
  return {
    type: SET_COUNTRIES_LIST,
    countriesList: [
      {name: 'Spain', iso: 'SPN'},
      {name: 'Brazil', iso: 'SPN'},
      {name: 'The United States', iso: 'SPN'},
      {name: 'Zimbawe', iso: 'SPN'},
      {name: 'Spain', iso: 'SPN'}
    ]
  };
}
