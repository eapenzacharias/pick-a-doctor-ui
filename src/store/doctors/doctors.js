import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const GET_DOCTORS = 'doctors';
const GET_A_DOCTOR = 'doctor';
// const BOOK_APPONTMENT = 'doctor/appointment';

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

// export const bookAppointment = (user, state) => async (dispatch) => {
//   const { headers } = user;
//   const currentState = { message: 'success' };
//   axios.post(`${url}appointments`, state, { headers })
//     .then(() => {
//       dispatch({
//         type: BOOK_APPONTMENT,
//         payload: currentState,
//       });
//       return <Navigate to="appointments" replace />;
//     })
//     .catch((error) => {
//       console.error('There was an error!', error);
//     });
// };

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    case GET_A_DOCTOR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
