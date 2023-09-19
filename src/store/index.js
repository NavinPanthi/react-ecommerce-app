import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  item: itemSlice.reducer,
  cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});
export default store;
