import React from 'react';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <div className={styles['gpt3__cta']}>
      <div className={styles['gpt3__cta-content']}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles['gpt3__cta-button']}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
