import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <button>Save to Spotify</button>
    </div>
  );
};

export default Playlist;