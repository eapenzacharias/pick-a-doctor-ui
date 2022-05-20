import axios from 'axios';

const GET_DOCTORS = 'specialization/doctors';
const GET_ALL_DOCTORS = 'doctors';
const GET_A_DOCTOR = 'doctor';

const url = 'https://pick-a-doc.herokuapp.com/api/';

export const getDoctors = (user, specializationID) => async (dispatch) => {
  const currentState = {};
  const { headers } = user;
  axios.get(`${url}specializations/${specializationID}`, user, { headers })
    .then((response) => {
      currentState.specialization = response.data.data.name;
      currentState.doctors = response.data.doctors;
      dispatch({
        type: GET_DOCTORS,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const getAllDoctors = (user) => async (dispatch) => {
  const currentState = {};
  const { headers } = user;
  axios.get(`${url}doctors`, user, { headers })
    .then((response) => {
      console.log(response);
      currentState.doctors = response.data.data;
      dispatch({
        type: GET_ALL_DOCTORS,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const getADoctor = (user, docID) => async (dispatch) => {
  const currentState = {};
  const { headers } = user;
  axios.get(`${url}doctors/${docID}`, user, { headers })
    .then((response) => {
      console.log(response);
      currentState.doctor = response.data.data;
      dispatch({
        type: GET_A_DOCTOR,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    case GET_ALL_DOCTORS:
      return action.payload;
    case GET_A_DOCTOR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
