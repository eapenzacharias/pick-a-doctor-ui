const initialState = {
  currentUser: {
    isSignedIn: false,
    attributes: {
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      profileImage: null,
      uid: null,
    },
    headers: {
      'access-token': null,
      'token-type': 'Bearer',
      client: null,
      expiry: null,
      uid: null,
    },
  },
};

export default initialState;
