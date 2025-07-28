import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

const mockResults = [
  { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
  { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
  { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
];

const mockPlaylist = { name: 'My Playlist', tracks: mockResults.slice(0, 2) };

const App = () => {
  const [results, setResults] = useState(mockResults);
  const [playlist, setPlaylist] = useState(mockPlaylist);

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

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults tracks={results} addTrack={addTrack} />
      <Playlist playListName={playlist.name} playlistTracks={playlist.tracks} />
    </div>
  );
};

export default App;