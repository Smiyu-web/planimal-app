import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartOpen: false,
    cartItems: [],
  },
  reducers: {
    setCartOpen: (state, action) => {
      state.cartOpen = !action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartOpen, setCartItems } = cartSlice.actions;

export const selectCartOpen = (state) => state.cart.cartOpen;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
