
import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './blockSlice';

const store = configureStore({
  reducer: {
    blocks: blockReducer,
  },
});

export default store;
