import { configureStore } from '@reduxjs/toolkit';
import musicTreeReducer from '../features/musicTree/musicTreeSlice';

export default configureStore({
  reducer: {
    musicTree: musicTreeReducer
  },
});
