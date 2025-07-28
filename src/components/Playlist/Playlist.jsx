import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

const Playlist = ({ playListName, playlistTracks, removeTrack }) => {
  return (
    <div className={styles.playlist}>
      <h2>{playListName}</h2>
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      <button>Save to Spotify</button>
    </div>
  );
};

export default Playlist;