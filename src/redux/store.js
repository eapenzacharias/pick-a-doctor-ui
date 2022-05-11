import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reduxTokenAuthReducer } from 'redux-token-auth';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
});

export const store = configureStore({
  middleware: [thunk, logger],
  reducer: rootReducer,
});

export default store;
