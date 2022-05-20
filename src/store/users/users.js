import axios from 'axios';
import initialState from '../initialState';

const SIGN_IN = 'auth/signin';
const SIGN_UP = 'auth/signup';
const SIGN_OUT = 'auth/signout';
const ACCOUNT_IS_UPDATING = 'auth/account-is-updating';
const ACCOUNT_UPDATE = 'auth/account-update';

const url = 'https://pick-a-doc.herokuapp.com/api/auth/';

export const signIn = (user) => async (dispatch) => {
  const currentState = JSON.parse(JSON.stringify(initialState));
  const headers = {
    'Content-Type': 'application/json',
  };
  axios
    .post(`${url}sign_in`, user, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      dispatch({
        type: SIGN_IN,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const signUp = (user) => async (dispatch) => {
  const currentState = JSON.parse(JSON.stringify(initialState));
  const headers = {
    'Content-Type': 'application/json',
  };
  axios
    .post(url, user, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = false;
      currentState.currentUser.isSignedUp = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      dispatch({
        type: SIGN_UP,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const signOut = (user) => async (dispatch) => {
  const { headers } = user;
  axios
    .delete(`${url}sign_out`, { headers })
    .then(() => {
      dispatch({
        type: SIGN_OUT,
        payload: initialState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const accountUpdate = (userInfo, headers) => async (dispatch) => {
  dispatch({
    type: ACCOUNT_IS_UPDATING,
  });
  const currentState = JSON.parse(JSON.stringify(initialState));
  axios
    .put(`${url}`, userInfo, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      dispatch({
        type: ACCOUNT_UPDATE,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
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
    case ACCOUNT_IS_UPDATING:
      return { ...state, isUpdating: true };
    case ACCOUNT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
