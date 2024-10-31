import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  opened: false,
};


const emojiSlice = createSlice({
    name:"emojiState",
    initialState,
    reducers:{
        updateStateFalse(state){
            state.opened = false;
           
            
        },
        updateStateTrue(state){
          state.opened = true;
      
        }
}})

export const {updateStateTrue, updateStateFalse} = emojiSlice.actions
export default emojiSlice.reducer