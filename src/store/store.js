import { configureStore } from "@reduxjs/toolkit";
import chatsectionSlice from "../features/chatsection.slice";
import chatListActive from "../features/chatListActive";

const store = configureStore({
  reducer: {
    chatSection: chatsectionSlice,
    chatList: chatListActive,
  },
});

export default store;
