import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    showCart: false,
    totalQuantity: 0,
  },
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      // To check if item is already in the cart.
      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const removingItem = action.payload;
      if (removingItem.all === "all") {
        state.cartList = state.cartList.filter(
          (item) => item.id !== removingItem.id
        );
        state.totalQuantity -= 1;
      }
      const existingItem = state.cartList.find(
        (item) => item.id === removingItem.id
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartList = state.cartList.filter(
            (item) => item.id !== removingItem.id
          );
          state.totalQuantity -= 1;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= removingItem.price;
        }
      }
    },
    removeAllFromCart(state) {
      state.cartList = state.cartList.filter((item)=>!item);
      state.totalQuantity = 0;
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
