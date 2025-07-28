import React from 'react';

import styles from './Track.module.css';

const Track = () => {
  return (
    <div className={styles.track}>
      <p>name - artist | album</p>
      <button>+</button>
    </div>
  );
};

export default Track;