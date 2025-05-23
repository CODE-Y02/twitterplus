import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./reducers/user";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
