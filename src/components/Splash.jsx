import React, { useEffect, useState } from 'react';
import styles from './Splash.module.css';

export default function Splash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.splash} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logoWrap}>
        <img
          src="/Aranya_logo.png"
          alt="Aranya The School"
          className={styles.logoImg}
        />
      </div>
      <div className={styles.tagline}>Nurturing Tomorrow's Global Leaders</div>
      <div className={styles.bar} />
    </div>
  );
}