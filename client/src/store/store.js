import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"; // Example slice

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here as needed
  },
});

export default store;
