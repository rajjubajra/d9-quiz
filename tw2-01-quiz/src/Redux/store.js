import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerMainNav, 
  reducerMultipleChoice
  
} from './Reducer';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerMainNav,
    reducerMultipleChoice
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
