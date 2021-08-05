import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.util";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartOpen: false,
    cartItems: [],
  },
  reducers: {
    setCartOpen: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },
    setCartItems: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});

export const { setCartOpen, setCartItems } = cartSlice.actions;

export const selectCartOpen = (state) => state.cart.cartOpen;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
