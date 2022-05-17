import { connect } from 'react-redux';
import { registerUser } from '../../redux/users/redux-token-auth-config';

function submitForm(e) {
  e.preventDefault();
  const { registerUser } = this.props;
  const {
    email,
    firstName,
    lastName,
    password,
    dateOfBirth,
  } = this.state;
  registerUser({
    email, firstName, lastName, password, dateOfBirth,
  })
    .then(console.log('Signed IN'))
    .catch('Error');
}

const SignUpForm = () => {
  const firstName = '';
  const lastName = '';
  const email = '';
  const password = '';
  const passwordConfirm = '';
  const dateOfBirth = '';
  return (
    <div className="flex w-screen h-screen bg-background">
      <div className="container justify-center px-6 m-auto ">
        <h1 className="headline text-3xl text-center mb-12">sign up.</h1>
        <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="md:flex md:items-center mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="text" value={firstName} placeholder="first name" />
            </div>
            <div className="w-full md:w-1/2 pl-1">
              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="text" value={lastName} placeholder="last name" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="email" value={email} placeholder="your email" />
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="password" value={password} placeholder="password" />
            </div>
            <div className="w-full md:w-1/2 pl-1">
              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="password" value={passwordConfirm} placeholder="confirm password" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" type="date" value={dateOfBirth} placeholder="your date of birth" />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button className="shadow bg-darkblue text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { registerUser },
)(SignUpForm);
