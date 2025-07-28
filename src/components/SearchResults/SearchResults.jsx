import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

import styles from './SearchResults.module.css';

const SearchResults = ({ tracks = [], addTrack }) => {
  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} addTrack={addTrack} />
    </div>
  );
};

export default SearchResults;