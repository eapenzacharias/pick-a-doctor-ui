import React, { useState, useEffect } from 'react';
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
        className={`${styles.SideNav} ${sideNav === 'open' ? styles.sideNavFullWidth : styles.sideNavNoneWidth}`}
      >
        <button
          className={`right-9 top-9 ${styles.closeBtn}`}
          type="button"
          onClick={() => closeNav()}
        >
          <XIcon className={`h-9 w-9 text-black ${styles.basicColor}`} />
        </button>
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
