import React, { useState, useEffect } from 'react';
import styles from './LandingView.module.css';
import IntroductoryPage from './IntroductoryPage/IntroductoryPage';
import AboutUs from './AboutUs/AboutUs';

const LandingView = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
  }, [slide]);

  const slideSwap = (slideNumber) => {
    setSlide(slideNumber);
  };

  return (
    <div className={styles.LandingView}>
      {slide === 1 ? <IntroductoryPage /> : null}
      {slide === 2 ? <AboutUs /> : null}
      <div className="fixed bottom-6 right-9">
        <div
          className={`w-3 h-3 my-5 rounded-full border-2 border-solid border-white cursor-pointer ${
            slide === 1 ? 'bg-white' : 'bg-transparent'
          }`}
          onClick={() => slideSwap(1)}
          onKeyDown={() => slideSwap(1)}
          role="presentation"
        />
        <div
          className={`w-3 h-3 my-5 rounded-full border-2 border-solid border-white cursor-pointer ${
            slide === 2 ? 'bg-white' : 'bg-transparent'
          }`}
          onClick={() => slideSwap(2)}
          onKeyDown={() => slideSwap(2)}
          role="presentation"
        />
      </div>
    </div>
  );
};
export default LandingView;
