import { createSlice } from '@reduxjs/toolkit';

export const musicTreeSlice = createSlice({
  name: 'musicTree',
  initialState:[
    {
      id: 0,
      name: 'Mac DeMarco',
      children: []
    }
  ],
  reducers: {
    setChildrenForNode: (state, action) => {
      setChildrenOfNodeByName(action.payload.name, state, action.payload.children);
    },
    setTreeData: (state, action) => {
      state[0].id = 0;
      state[0].name = action.payload;
      state[0].children = [];
    }
  },
});

const setChildrenOfNodeByName = (nodeName, nodeSet, children) => {
  let foundNode = nodeSet.filter(node => node.name === nodeName);
  if(foundNode.length > 0) {
    children.forEach((child) => {
      foundNode[0].children.push(child);
    });
  } else {
    nodeSet.forEach(node => {
      if (node.children && node.children.length > 0) {
        setChildrenOfNodeByName(nodeName, node.children, children);
      }
    });
  }
};

export const { setChildrenForNode, setTreeData } = musicTreeSlice.actions;

export const selectMusicTreeData = state => state.musicTree;

export default musicTreeSlice.reducer;
