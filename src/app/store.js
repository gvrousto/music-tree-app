import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import musicTreeReducer from '../features/musicTree/musicTreeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    musicTree: musicTreeReducer
  },
});
