import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import userSlice from "../features/userSlice";
import itemSlice from "../features/itemSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    item: itemSlice,
    cart: cartSlice,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
