import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveId: null,
};

const chatListActiveSlice = createSlice({
  name: "chatListActive",
  initialState,
  reducers: {
    setChatListActive: (state, action) => {
      state.isActiveId = action.payload;
    },
  },
});
export const { setChatListActive } = chatListActiveSlice.actions;
export default chatListActiveSlice.reducer;
