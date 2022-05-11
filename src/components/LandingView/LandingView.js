import React from 'react';
import styles from './LandingView.module.css';
import IntroductoryPage from './IntroductoryPage/IntroductoryPage';

const LandingView = () => (
  <div className={styles.LandingView}>
    <IntroductoryPage />
  </div>
);

export default LandingView;
