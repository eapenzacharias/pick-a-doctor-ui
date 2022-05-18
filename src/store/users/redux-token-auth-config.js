import { generateAuthActions } from 'redux-token-auth';

const authUrl = 'https://pick-a-doc.herokuapp.com/api/auth/';

const config = {
  authUrl,
  userAttributes: {
    firstName: 'first_name',
    lastName: 'last_name',
    profileImage: 'profile_image',
    dateOfBirth: 'date_of_birth',
    uid: 'uid',
  },
  userRegistrationAttributes: {
    firstName: 'first_name',
    lastName: 'last_name',
    profileImage: 'profile_image',
    dateOfBirth: 'date_of_birth',
  },
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
};
