import React, { useState, useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size'
import {
  setChildrenForNode,
  selectMusicTreeData
} from './musicTreeSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MusicTree.module.css';
import axios from 'axios';
import Tree from 'react-d3-tree';

export function MusicTree(){
  const musicTreeData = useSelector(selectMusicTreeData);
  const dispatch = useDispatch();
  const[translate, setTranslate] = useState();
  const[width, height] = useWindowSize();
  let numberOfNodes = 0;

  const onClickOfNode = (targetNode, evt) => {
    const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${targetNode.name}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`;
    axios.get(lastFmUrl)
      .then((response) => {
        let children = response.data.similarartists.artist.slice(4, 7)
                        .map((value) => {
                          numberOfNodes++;
                          return {name: value.name, id: numberOfNodes, children: [] };
                        });
        dispatch(setChildrenForNode({ name: targetNode.name, children: children }));
      });
  };

  useEffect(() => {
    const translateTemp = {
      x: (width / 4),
      y: (height / 2)
    };
    setTranslate(translateTemp);
  }, [height, width]);

  return (
    <div className={styles.musicTreeContainer}>
      <Tree onClick={onClickOfNode} data={musicTreeData} translate={translate}/>
    </div>
  );
}
