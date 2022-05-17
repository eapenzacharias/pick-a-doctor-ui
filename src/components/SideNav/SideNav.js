import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import styles from './SideNav.module.css';
import { store } from '../../redux/store';
import { signOut } from '../../redux/users/users';

const SideNav = () => {
  const dispatch = useDispatch();
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
    const data = store.getState();
    dispatch(signOut(data.usersReducer.currentUser));
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
