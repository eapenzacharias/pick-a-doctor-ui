import axios from 'axios';
import initialState from '../initialState';

const GET_DOCTORS = 'doctors';

const url = 'https://pick-a-doc.herokuapp.com/api/';

export const getDoctors = (user, specializationID) => async (dispatch) => {
  let currentState = [];
  const { headers } = user;
  axios.get(`${url}specializations/${specializationID}`, user, { headers })
    .then((response) => {
      currentState = response.data;
      dispatch({
        type: GET_DOCTORS,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
