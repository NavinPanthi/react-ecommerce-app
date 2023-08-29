import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
