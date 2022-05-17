import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import styles from './SideNav.module.css';

const SideNav = () => {
  const [sideNav, setSideNav] = useState('close');

  useEffect(() => {}, [sideNav]);

  const openNav = () => {
    setSideNav('open');
  };

  const closeNav = () => {
    setSideNav('close');
  };

  return (
    <>
      <div
        id="mySidenav"
        className={`${styles.SideNav} ${
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
            PICK A DOCTOR
          </h4>
          <ul>
            <li className="p-4 font-sans text-xl font-bold text-dark_main_color cursor-pointer hover:bg-light_main_color hover:text-white">
              SPECIALIZATIONS
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
