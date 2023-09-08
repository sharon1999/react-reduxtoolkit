import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login(state, action) {
      // To change the user state from the payload provided from user during login
      state.value = action.payload;
    },
    logout(state, action) {
      // To change the user state from the payload provided from user during login
      state.value = { name: "", age: 0, email: "" };
    }
  }
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
