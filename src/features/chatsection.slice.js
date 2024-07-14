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
      state.chatname = action.payload;
      state.isOpen = !state.isOpen;
    },
  },
});
export const { setChatSectoin } = chatSectionSlice.actions;
export default chatSectionSlice.reducer;
