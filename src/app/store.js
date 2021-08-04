import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import itemSlice from "../features/itemSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    item: itemSlice,
    cart: cartSlice,
  },
});
