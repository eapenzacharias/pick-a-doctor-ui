import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => (
  <div className={`flex flex-col justify-center items-center ${styles.AboutUs}`}>
    <h1
      className={`justify-self-center text-7xl font-sans subpixel-antialiased tracking-wide text-white ${styles.headline}`}
    >
      PICK A DOCTOR
    </h1>
    <span className="bg-white block w-2/4 h-0.5 m-5" />
    <p className={`text-white text-xl max-w-[60%] text-center ${styles.textShadow}`}>
      Pick a doctor is a website helping you find doctors that belong to a
      specific specialization in no time and allows you to book appointments
      with them easily.
    </p>
  </div>
);

export default AboutUs;
