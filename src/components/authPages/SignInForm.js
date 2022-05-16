import { connect } from 'react-redux';
import { signInUser } from '../../redux/users/redux-token-auth-config';
// import styles from '../LandingView/LandingView.module.css';
// import { useSelector, useDispatch } from 'react-redux';

function submitForm(e) {
  e.preventDefault();
  const { signInUser } = this.props;
  const {
    email,
    password,
  } = this.state;
  signInUser({ email, password })
    .then(console.log('Signed IN'))
    .catch('Error');
}

const SignInForm = () => {
  const name = '';
  const password = '';
  return (
    <div className="flex w-screen h-screen">
      <div className="container justify-center px-6 m-auto ">
        <h1 className="headline text-3xl text-center mb-12">sign in.</h1>
        <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" id="inline-full-name" type="text" value={name} placeholder="your email!" />
          </div>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" id="inline-password" type="password" value={password} placeholder="your password!" />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button className="shadow bg-darkblue text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
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
  { signInUser },
)(SignInForm);
