import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { reduxTokenAuthReducer } from 'redux-token-auth';
import usersReducer from './users/users';
import doctorReducer from './doctors/doctors';

const rootReducer = combineReducers({
  usersReducer,
  doctorReducer,
});

export const store = configureStore({
  middleware: [thunk, logger],
  reducer: rootReducer,
});

export default store;
