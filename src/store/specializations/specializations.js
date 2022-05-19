/* eslint-disable no-param-reassign */
import axios from 'axios';

// Actions
const LOAD = 'pick-a-doctor/specializations/LOAD';
const SUCCESS = 'pick-a-doctor/specializations/SUCCESS';
const FAILURE = 'pick-a-doctor/specializations/FAILURE';

// Initial state
const initialState = [];

// url base
const url = 'https://pick-a-doc.herokuapp.com/api/specializations';

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
export function GetSpecializations(user) {
  const { headers } = user;
  return (dispatch) => {
    dispatch(LoadSpecializations());
    axios
      .get(url, { headers })
      .then((response) => {
        dispatch(SuccessSpecializations(response.data));
      })
      .catch((error) => {
        dispatch(FailureSpecializations(error.message));
      });
  };
}
