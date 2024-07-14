import { configureStore } from "@reduxjs/toolkit";
import chatsectionSlice from "../features/chatsection.slice";

const store = configureStore({
  reducer: {
    chatSection: chatsectionSlice,
  },
});

export default store;
