import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import usersReducer from './users/users';
import specializationsReducer from './specializations/specializations';
import appointmentsReducer from './appointments/appointments';

const rootReducer = combineReducers({
  usersReducer,
  specializations: specializationsReducer,
  appointments: appointmentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
