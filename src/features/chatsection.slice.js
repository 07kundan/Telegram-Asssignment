import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  chatname: null,
};

const chatSectionSlice = createSlice({
  name: "chatSection",
  initialState,
  reducers: {
    setChatSectoin: (state, action) => {
      state.chatname = null;
      state.chatname = action.payload;
      action.payload ? (state.isOpen = true) : (state.isOpen = false);
    },
  },
});
export const { setChatSectoin } = chatSectionSlice.actions;
export default chatSectionSlice.reducer;
