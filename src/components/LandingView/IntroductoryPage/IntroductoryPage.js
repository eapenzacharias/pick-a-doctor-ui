import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroductoryPage.module.css';
import doctorFigure from '../../../assets/images/lovepik_com-401907501-doctors.png';

const IntroductoryPage = () => (
  <div
    className={`flex flex-row justify-center items-center ${styles.IntroductoryPage}`}
  >
    <div>
      <h1
        className={`justify-self-center text-7xl font-sans subpixel-antialiased tracking-wide text-white ${styles.headline}`}
      >
        PICK A DOCTOR
      </h1>
      <div className="flex flex-row justify-center items-center mt-8">
        <Link to="/signin">
          <button type="button" className={`py-2.5 px-14 mx-4 text-2xl rounded-full ${styles.btn}`}>
            Sign in
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className={`py-2.5 px-14 mx-4 text-2xl rounded-full ${styles.btn}`}>
            Sign up
          </button>
        </Link>
      </div>
    </div>
    <img src={doctorFigure} alt="Doctor figure" className="max-w-[45%] max-h-[90%] px-5" />
  </div>
);

export default IntroductoryPage;
