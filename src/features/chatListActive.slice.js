import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveId: null,
  //   reference: null,
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
