import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

const Playlist = ({ playListName, playlistTracks, removeTrack, editPlaylistName }) => {
  return (
    <div className={styles.playlist}>
      <input
        className={styles.playlistNameInput}
        type="text"
        value={playListName}
        onChange={({ target }) => editPlaylistName(target.value)}
      />
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      <button>Save to Spotify</button>
    </div>
  );
};

export default Playlist;