import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: ""
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setLogoutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    }
  }
});

export const { setLoginState, setLogoutState } = UserReducer.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default UserReducer.reducer;
