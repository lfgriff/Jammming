import React from 'react';

import styles from './Track.module.css';

const Track = ({ id, name, artist, album, addTrack, removeTrack }) => {
  return (
    <div className={styles.track}>
      <p>{name} - {artist} | {album}</p>
      { addTrack ? 
        <button onClick={() => addTrack({ id, name, artist, album })}>+</button>
      :
        <button onClick={() => removeTrack({ id, name, artist, album })}>-</button> 
      }
    </div>
  );
};

export default Track;