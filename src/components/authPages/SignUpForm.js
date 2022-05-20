/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../store/users/users';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    date_of_birth: '',
  });

  const isSignedUp = useSelector(
    (state) => state.usersReducer.currentUser.isSignedUp,
  );

  useEffect(() => {
    isSignedUp ? navigate('/signin') : null;
  }, [isSignedUp]);

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
    dispatch(signUp(state));
  };

  return (
    <div className="flex w-screen h-screen bg-light_main_color">
      <div className="container justify-center px-6 m-auto ">
        <h1 className="headline text-3xl text-center mb-12">sign up.</h1>
        <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="md:flex md:items-center mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="text"
                name="first_name"
                value={state.first_name}
                onChange={handleChange}
                placeholder="first name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 pl-1">
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="text"
                name="last_name"
                value={state.last_name}
                onChange={handleChange}
                placeholder="last name"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <input
              className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="your email"
              required
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="password"
                required
              />
            </div>
            <div className="w-full md:w-1/2 pl-1">
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="password"
                name="passwordConfirm"
                value={state.passwordConfirm}
                onChange={handleChange}
                placeholder="confirm password"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <input
              className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-dark_main_color"
              type="date"
              name="date_of_birth"
              value={state.date_of_birth}
              onChange={handleChange}
              placeholder="your date of birth"
              required
            />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow bg-dark_main_color text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
