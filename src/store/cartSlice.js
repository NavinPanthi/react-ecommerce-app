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
      console.log(newItem);
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
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
