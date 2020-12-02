import React, { useState } from 'react';
import {
  setTreeData,
  selectMusicTreeData
} from '../musicTree/musicTreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './SearchBar.module.css';

export function SearchBar(){
  const musicTreeData = useSelector(selectMusicTreeData);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(musicTreeData);
  return (
      <div className={styles.searchBarContainer}>
        <input
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
          className={styles.searchBar}
        />
      <button
        onClick={()=>{
          dispatch(setTreeData(inputValue));
          history.push('musicTree');
        }}
        className={styles.searchButton}
      >
          search
        </button>
      </div>
  );
}
