// productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { data } from './data'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: data,
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((cartItem) => cartItem.id === product.id);

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.cart.push({ ...product, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== productId);
    },
    increase: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === productId ? { ...cartItem, count: cartItem.count + 1 } : cartItem
      );
    },
    decrease: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((cartItem) => cartItem.id === productId 
        ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 } 
        : cartItem);
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease } = productSlice.actions;

export default productSlice.reducer;




