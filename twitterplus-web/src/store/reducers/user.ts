import { TUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state (empty user object)
const initialState: TUser = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state = { ...state, ...action.payload };
    },
    resetUser: () => {
      return initialState;
    },
  },
});

// Extract actions and reducer
const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

export default userReducer;
