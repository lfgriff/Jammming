import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

const Playlist = ({ playListName, playlistTracks }) => {
  return (
    <div className={styles.playlist}>
      <h2>{playListName}</h2>
      <Tracklist tracks={playlistTracks} />
      <button>Save to Spotify</button>
    </div>
  );
};

export default Playlist;