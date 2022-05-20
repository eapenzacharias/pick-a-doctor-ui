/* eslint-disable no-param-reassign */
import axios from 'axios';

// Actions
const LOAD = 'pick-a-doctor/appointments/LOAD';
const SUCCESS = 'pick-a-doctor/appointments/SUCCESS';
const FAILURE = 'pick-a-doctor/appointments/FAILURE';

// Initial state
const initialSate = [];

// url base
const url = 'https://pick-a-doc.herokuapp.com/api/user_appointments';

// Reducer
export default function appointmentsReducer(state = initialSate, action) {
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
export function loadAppointments() {
  return { type: LOAD };
}

export function successAppointments(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}

export function failureAppointments(payload) {
  return {
    type: FAILURE,
    payload,
  };
}

// side effects, only as applicable
export function getAppointments(user) {
  const { headers } = user;
  const { id } = user.attributes;
  return (dispatch) => {
    dispatch(loadAppointments());
    axios
      .get(`${url}?id=${id}`, { headers })
      .then((response) => {
        dispatch(successAppointments(response.data));
      })
      .catch((error) => {
        dispatch(failureAppointments(error));
      });
  };
}
