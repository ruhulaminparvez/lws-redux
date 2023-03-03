import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../actions/productSlice';
import showContentSlice from '../actions/showContent';

const store = configureStore({
  reducer: {
    product: productSlice,
    showContent: showContentSlice,
  },
});

export default store;

