import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

const mockData = [
  { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1", uri: "spotify:track:1" },
  { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2", uri: "spotify:track:2" },
  { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3", uri: "spotify:track:3" },
];

const App = () => {
  const [results, setResults] = useState(mockData);
  const [playlist, setPlaylist] = useState({ name: 'My Playlist', tracks: [] });

  const addTrack = (track) => {
    if (playlist.tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylist({
        name: playlist.name,
        tracks: [...playlist.tracks, track],
      });
    }
  };

  const removeTrack = (track) => {
    setPlaylist({
      name: playlist.name,
      tracks: playlist.tracks.filter((playlistTrack) => playlistTrack.id !== track.id),
    });
  };

  const editPlaylistName = (newName) => {
    setPlaylist({
      name: newName,
      tracks: playlist.tracks,
    });
  };

  const savePlaylist = () => {
    playlist.tracks.map((track) => {
      console.log(`Saving track: ${track.name} by ${track.artist} with the uri: ${track.uri} to Spotify`);
    });
    setPlaylist({ name: 'My Playlist', tracks: [] });
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults tracks={results} addTrack={addTrack} />
      <Playlist 
        playListName={playlist.name} 
        playlistTracks={playlist.tracks} 
        removeTrack={removeTrack} 
        editPlaylistName={editPlaylistName}
        savePlaylist={savePlaylist}
      />
    </div>
  );
};

export default App;