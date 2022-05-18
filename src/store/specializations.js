/* eslint-disable no-param-reassign */
import axios from 'axios';

// Actions
const LOAD = 'pick-a-doctor/specializations/LOAD';
const SUCCESS = 'pick-a-doctor/specializations/SUCCESS';
const FAILURE = 'pick-a-doctor/specializations/FAILURE';

// initial state
const initialState = [];

// Reducer
export default function specializationsReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      state = action.payload;
      return state;
    case FAILURE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}

// Action Creators
export function LoadSpecializations() {
  return { type: LOAD };
}

export function SuccessSpecializations(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}

export function FailureSpecializations(payload) {
  return {
    type: FAILURE,
    payload,
  };
}

// side effects, only as applicable
export function GetSpecializations() {
  return (dispatch) => {
    dispatch(LoadSpecializations());
    axios
      .get('http://127.0.0.1:3002/api/specializations')
      .then((response) => {
        console.log('Hereeeee baby', response.data);
        dispatch(SuccessSpecializations(response.data));
      })
      .catch((error) => {
        console.log('Noooo baby', error);
        dispatch(FailureSpecializations(error.message));
      });
  };
}
