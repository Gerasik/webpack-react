import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import counters from '../containers/HomePage/reducer';

const reducer = combineReducers({ counters });

// eslint-disable-next-line prettier/prettier
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducer, composeEnhancers());

export default store;
