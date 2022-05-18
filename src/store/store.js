import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import usersReducer from './users/users';

import specializationsReducer from './specializations/specializations';

const rootReducer = combineReducers({
  usersReducer,
  specializations: specializationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
