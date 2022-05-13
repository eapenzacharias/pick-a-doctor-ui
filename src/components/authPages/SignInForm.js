import { connect } from 'react-redux';
import { signInUser } from '../../redux/users/redux-token-auth-config';
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
  const name = 'name';
  return (
    <>
      <form className="w-full max-w-sm" onSubmit={submitForm}>
        <div className="md:flex md:items-center mb-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            <div className="md:w-1/3">Full Name</div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={name} />
            </div>
          </label>
        </div>
        <div className="md:flex md:items-center mb-6">

          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
            <div className="md:w-1/3">Password</div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
            </div>
          </label>
        </div>
        {/* <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3" />
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
              Send me your newsletter!
            </span>
          </label>
        </div> */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default connect(
  null,
  { signInUser },
)(SignInForm);
