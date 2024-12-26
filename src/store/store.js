
import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './blockSlice';
import emojiReducer from './emojiSlice';
import shopReducer from './shopSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    blocks: blockReducer,
    emoji: emojiReducer,
    shop: shopReducer,
    user: userReducer,
  },
});

export default store;
