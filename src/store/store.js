import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import specializationsReducer from './specializations/specializations';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  specializations: specializationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
