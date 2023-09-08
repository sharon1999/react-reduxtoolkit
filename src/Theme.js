import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "user",
  initialState: { value: "" },
  reducers: {
    setTheme(state, action) {
      // To change the user state from the payload provided from user during login
      state.value = action.payload;
    }
  }
});
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
