import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      // when we click the delete button of an item then this will action.payload.id and item.id is all item ===> mean to filter/show all item excepet the item that we click their delete button
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
