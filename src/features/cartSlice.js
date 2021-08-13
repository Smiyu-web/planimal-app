import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.util";

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
    setRemoveCartItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    setClearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { setCartOpen, setCartItems, setRemoveCartItem, setClearCart } =
  cartSlice.actions;

export const selectCartOpen = (state) => state.cart.cartOpen;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
