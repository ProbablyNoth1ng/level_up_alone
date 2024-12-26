import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  blocks: [],
};

const blockSlice = createSlice({
    name:"blocks",
    initialState,
    reducers:{
        addBlock:{
            reducer(state,action){
                state.blocks.push(action.payload)
            },
            prepare(blockData){
                return{
                    payload: {
                        id:nanoid(),
                        ...blockData
                    },
                }
            }
        },
        updateBlock(state,action){
            const {id,changes} = action.payload; 
            const existingBlock = state.blocks.find((block) => block.id === id);
            if(existingBlock){
                Object.assign(existingBlock,changes)
                
            }
        },
        removeBlock(state,action){
            const id = action.payload
            state.blocks = state.blocks.filter((block) => block.id !== id)
        }
    }
})

export const {addBlock, updateBlock, removeBlock} = blockSlice.actions
export default blockSlice.reducer