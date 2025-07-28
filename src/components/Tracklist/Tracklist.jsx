import React from 'react';

import Track from '../Track/Track';

import styles from './Tracklist.module.css';

const Tracklist = ({ tracks = [], addTrack }) => {
  return (
    <div className={styles.tracklist}>
      {tracks.length === 0 ?
        <p>No tracks available</p> 
        :
        tracks.map(track => (
          <Track key={track.id} {...track} addTrack={addTrack} />
        ))
      }
    </div>
  );
};

export default Tracklist;