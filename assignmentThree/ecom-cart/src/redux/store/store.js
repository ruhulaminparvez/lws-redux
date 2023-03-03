import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../actions/productSlice';
import showContentSlice from '../actions/showContent';
import cartSlice from "../actions/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    showContent: showContentSlice,
    cart: cartSlice,
  },
});

export default store;

