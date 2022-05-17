import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/users/users';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    dispatch(signIn(state));
  };

  return (
    <div className="flex w-screen h-screen bg-background">
      <div className="container justify-center px-6 m-auto ">
        <h1 className="headline text-3xl text-center mb-12">sign in.</h1>
        <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" name="email" type="text" value={state.email} onChange={handleChange} placeholder="your email!" />
          </div>
          <div className="md:flex md:items-center mb-6">
            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue" name="password" type="password" value={state.password} onChange={handleChange} placeholder="your password!" />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button className="shadow bg-darkblue text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
