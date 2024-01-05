import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const userStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default userStore;
