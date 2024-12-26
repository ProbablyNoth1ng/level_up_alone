import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  user: {
    nickname: "Nickname",
    title: "Title",
    level: 1,
    xp: 50,
    ava: 'ava',
    balance: 1122,
    boost: 12,
    historyBought: [],
  }
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.user.historyBought.push(action.payload); 
      },
      prepare(usersData) {
        return {
          payload: {
            id: nanoid(),
            ...usersData
          }
        };
      }
    },
    balanceChange(state, action) {   
      const { id, itemName, itemDescription, itemPrice } = action.payload;
      // console.log('id -' + id);
      // console.log('changes -' + itemName);
      // console.log('changes -' + itemDescription);
      // console.log('changes -' + itemPrice);

      if (state.user.balance > itemPrice) {
        console.log(state.user.balance); 
        state.user.balance -= Number(itemPrice);
      } else {
        alert("NOT ENOUGH MONEY")
      }
    },
  },
});

export const { addItem, balanceChange } = userSlice.actions;
export default userSlice.reducer;
