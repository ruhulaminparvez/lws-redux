import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../actions/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;

