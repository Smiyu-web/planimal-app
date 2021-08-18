import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: "",
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;

export default userSlice.reducer;
