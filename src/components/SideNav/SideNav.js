import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideNav.module.css';
import { signOut } from '../../store/users/users';

const SideNav = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const [sideNav, setSideNav] = useState('close');

  useEffect(() => {}, [sideNav]);

  const openNav = () => {
    setSideNav('open');
  };

  const closeNav = () => {
    setSideNav('close');
  };

  const userSignOut = (evt) => {
    evt.preventDefault();
    dispatch(signOut(currentUser));
  };

  return (
    <>
      <div
        id="mySidenav"
        className={`shadow ${styles.SideNav} ${
          sideNav === 'open' ? styles.sideNavFullWidth : styles.sideNavNoneWidth
        }`}
      >
        <button
          className={`right-3 top-3 ${styles.closeBtn}`}
          type="button"
          onClick={() => closeNav()}
        >
          <XIcon className={`h-8 w-8 text-black ${styles.basicColor}`} />
        </button>
        <div className={sideNav === 'close' ? 'hidden' : 'block'}>
          <h4 className="mt-14 mb-36 ml-4 font-sans text-xl font-bold text-dark_main_color whitespace-nowrap">
            <Link to="/">PICK A DOCTOR</Link>
          </h4>
          <ul>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              <Link to="/specializations">SPECIALIZATIONS</Link>
            </li>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              <Link to="/doctors">DOCTORS</Link>
            </li>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              <Link to="/appointments">APPOINTMENTS</Link>
            </li>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              <Link to="/profile">PROFILE</Link>
            </li>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              <button type="button" onClick={userSignOut} className="font-bold">
                SIGN OUT
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => openNav()}
        className={`fixed left-9 top-9 ${
          sideNav === 'close' ? 'inline-block' : 'hidden'
        }`}
      >
        <MenuIcon className="h-10 w-10 text-white" />
      </button>
    </>
  );
};

export default SideNav;
