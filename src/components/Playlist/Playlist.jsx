import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

const Playlist = ({ playListName, playlistTracks, removeTrack, editPlaylistName, savePlaylist }) => {
  const isPlaylistEmpty = playlistTracks.length === 0;
  
  return (
    <div className={styles.playlist}>
      <input
        className={styles.playlistNameInput}
        type="text"
        value={playListName}
        onChange={({ target }) => editPlaylistName(target.value)}
      />
      { isPlaylistEmpty ?
      <p>Your playlist is empty</p>
      : 
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      }
      <button onClick={savePlaylist} disabled={isPlaylistEmpty}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;