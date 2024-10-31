
import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './blockSlice';
import emojiReducer from './emojiSlice';

const store = configureStore({
  reducer: {
    blocks: blockReducer,
    emoji: emojiReducer,
  },
});

export default store;
