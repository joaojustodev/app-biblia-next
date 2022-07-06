import { configureStore } from "@reduxjs/toolkit";
import { bibleReducer } from "./bible";
import { acessibilityReducer } from "./acessibility";
// ...

export const store = configureStore({
  reducer: {
    bible: bibleReducer,
    acessibility: acessibilityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
