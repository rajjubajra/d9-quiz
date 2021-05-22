import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerMainNav, 
  
} from './Reducer';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerMainNav,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
