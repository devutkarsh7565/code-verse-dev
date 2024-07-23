import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/demo";
import allModalReducer from "@/redux/features/allModal";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allModal: allModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
