import { configureStore } from "@reduxjs/toolkit";
import chatsectionSlice from "../features/chatsection.slice";
import themeSlice from "../features/theme.slice";
import chatListActiveSlice from "../features/chatListActive.slice";

const store = configureStore({
  reducer: {
    chatSection: chatsectionSlice,
    chatList: chatListActiveSlice,
    theme: themeSlice,
  },
});

export default store;
