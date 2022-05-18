const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        profileImage: null,
        uid: null,
      },
    },
  },
};

export default initialState;
