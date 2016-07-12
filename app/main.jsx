'use strict';

import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';

import reducers from './reducers';
import Routes from './Routes';

import './styles/main.pcss';

/**
 * Reducers
 * @info(http://redux.js.org/docs/basics/Reducers.html)
 * @type {Object}
 */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

/**
 * Global state
 * @info(http://redux.js.org/docs/basics/Store.html)
 * @type {Object}
 */
const middlewareRouter = routerMiddleware(browserHistory);
const store = createStore(
  reducer,
  /* The router middleware MUST be before thunk otherwise the URL changes inside
   * a thunk function won't work properly */
  applyMiddleware(middlewareRouter),
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * HTML5 History API managed by React Router module
 * @info(https://github.com/reactjs/react-router/tree/master/docs)
 * @type {Object}
 */
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Routes history={history}/>
  </Provider>,
  document.getElementById('app')
);
