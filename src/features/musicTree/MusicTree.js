import React, { useState, useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size'
import styles from './MusicTree.module.css';
import axios from 'axios';
import clone from 'clone';
import Tree from 'react-d3-tree';

const lastFmUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=john lenon&api_key="+process.env.REACT_APP_LASTFM_KEY+"&format=json";
const treeInitialState = [
  {
    name: 'Cher',
    children: []
  }
];

export function MusicTree(){
  const[translate, setTranslate] = useState();
  const[treeData, setTreeData] = useState(treeInitialState);
  const[width, height] = useWindowSize();
  console.log(treeData);
  useEffect(() => {
    axios.get(lastFmUrl)
      .then((response) => {
        const treeDataTemp = clone(treeData);
        const target = treeDataTemp[0].children ? treeDataTemp[0].children : treeDataTemp[0]._children
        let children = response.data.similarartists.artist.slice(0, 3);
        children = children.map((child) => {
          return { name: child.name };
        });
        target.push({ name: `Fck` });
        setTreeData(treeDataTemp);
      });
  }, [treeData]);

  useEffect(() => {
    const translateTemp = {
      x: (width / 4),
      y: (height / 2)
    };
    setTranslate(translateTemp);
  }, [height, width]);

  return (
    <div className={styles.musicTreeContainer}>
      <Tree data={treeData} translate={translate}/>
    </div>
  );
}
