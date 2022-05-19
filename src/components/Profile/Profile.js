import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import styles from './Profile.module.css';

const Profile = () => {
  // const dispatch = useDispatch;
  const [state, setState] = useState({});
  const currentUser = useSelector((state) => state.usersReducer.currentUser.attributes);

  useEffect(() => {
    setState(currentUser);
  }, []);

  return (
    <div className="flex w-screen h-screen bg-light_main_color">
      <div className="container px-6 m-auto">
        <h1 className="headline text-3xl text-center mb-12">My profile.</h1>
        <form className="w-full max-w-sm mx-auto">
          <div className="md:flex md:items-center mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
              <label
                htmlFor="first_name"
                className="block text-base font-medium text-dark_main_color"
              >
                First name
                <input
                  className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight mt-2 focus:outline-none focus:bg-white focus:border-dark_main_color"
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  value={state.first_name}
                  required
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 pl-1">
              <label
                htmlFor="first_name"
                className="block text-base font-medium text-dark_main_color"
              >
                Last name
                <input
                  className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight mt-2
              focus:outline-none focus:bg-white focus:border-dark_main_color"
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  value={state.last_name}
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label
              htmlFor="first_name"
              className="block text-base font-medium text-dark_main_color w-full"
            >
              Email
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight mt-2 focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="email"
                name="email"
                placeholder="your email"
                value={state.email}
                required
              />
            </label>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label
              htmlFor="first_name"
              className="block text-base font-medium text-dark_main_color w-full"
            >
              Date of birth
              <input
                className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight mt-2 focus:outline-none focus:bg-white focus:border-dark_main_color"
                type="date"
                name="date_of_birth"
                placeholder="your date of birth"
                value={state.date_of_birth}
                required
              />
            </label>
          </div>
          <div className="md:flex md:items-center md:justify-center">
            <button
              className="shadow bg-dark_main_color text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Profile;
