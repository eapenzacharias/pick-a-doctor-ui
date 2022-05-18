import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import specializationsReducer from './specializations';

const rootReducer = combineReducers({
  specializations: specializationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
