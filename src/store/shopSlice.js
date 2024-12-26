import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shopSlice = createSlice({
    name:"shopSlice",
    initialState,
    reducers:{
       addItem:{
            reducer(state,action){
                state.items.push(action.payload)
            },
            prepare(itemsData){
                return{
                    payload:{
                        id:nanoid(),
                        ...itemsData
                    },
                }
            }
       },
       editItem(state,action){
        const {id,changes} = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if(existingItem){
            Object.assign(existingItem,changes)
            console.log(123)
        }
    },

  }})



  export const {addItem, editItem} = shopSlice.actions
  export default shopSlice.reducer