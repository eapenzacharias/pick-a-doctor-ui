import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';
import { signOut } from '../../store/users/users';

const SideNav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const [sideNav, setSideNav] = useState('close');

  useEffect(() => { }, [sideNav]);

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
        className={`${styles.SideNav} ${sideNav === 'open' ? styles.sideNavFullWidth : styles.sideNavNoneWidth}`}
      >
        <button
          className={`right-9 top-9 ${styles.closeBtn}`}
          type="button"
          onClick={() => closeNav()}
        >
          <XIcon className={`h-9 w-9 text-black ${styles.basicColor}`} />
        </button>

        <button type="button" onClick={userSignOut}>Sign Out</button>
        <Link to="/doctors"><button type="button">Doctors</button></Link>
      </div>
      <button
        type="button"
        onClick={() => openNav()}
        className={`fixed left-9 top-9 ${sideNav === 'close' ? 'inline-block' : 'hidden'}`}
      >
        <MenuIcon className="h-10 w-10 text-white" />
      </button>
    </>
  );
};

export default SideNav;
