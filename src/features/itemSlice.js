import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    listItems: [],
    currentItem: [],
  },
  reducers: {
    setListItems: (state, action) => {
      state.listItems = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const { setListItems, setCurrentItem } = itemSlice.actions;

export const selectListItems = (state) => state.item.listItems;
export const selectCurrentItem = (state) => state.item.currentItem;

export default itemSlice.reducer;
