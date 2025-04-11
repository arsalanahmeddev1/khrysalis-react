import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./features/auth";
import { video } from "./features/video";
import { comment } from "./features/comments";
import { channel } from "./features/channel";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [video.reducerPath]: video.reducer,
    [comment.reducerPath]: comment.reducer,
    [channel.reducerPath]: channel.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      auth.middleware,
      video.middleware,
      comment.middleware,
      channel.middleware
    ),
});

setupListeners(store.dispatch);
