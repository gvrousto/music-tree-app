import React from 'react';

import styles from './SearchBar.module.css';

export function SearchBar(){
  return (
      <div className={styles.searchBarContainer}>
        <input className={styles.searchBar}/>
        <button className={styles.searchButton}>
          search
        </button>
      </div>
  );
}
