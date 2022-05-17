import axios from 'axios';
import { defaultState, initialState } from '../initialState';

const SIGN_IN = 'auth/signin';
const SIGN_UP = 'auth/signup';
const SIGN_OUT = 'auth/signout';

const url = 'https://pick-a-doc.herokuapp.com/api/auth/';

export const signIn = (user) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  axios.post(`${url}sign_in`, user, { headers })
    .then((response) => {
      initialState.currentUser.isSignedIn = true;
      initialState.currentUser.attributes = response.data.data;
      initialState.currentUser.headers = response.headers;
    })
    .then(() => {
      dispatch({
        type: SIGN_IN,
        payload: initialState,
      });
    });
};

export const signUp = (user) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  axios.post(url, user, { headers })
    .then((response) => {
      initialState.currentUser.isSignedIn = false;
      initialState.currentUser.attributes = response.data.data;
      initialState.currentUser.headers = response.headers;
    })
    .then(() => {
      dispatch({
        type: SIGN_UP,
        payload: initialState,
      });
    });
};

export const signOut = (user) => async (dispatch) => {
  const { headers } = user;
  axios.delete(`${url}sign_out`, { headers })
    .then(() => {
      dispatch({
        type: SIGN_OUT,
        payload: defaultState,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_UP:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
