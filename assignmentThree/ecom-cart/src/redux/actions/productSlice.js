const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [], // Array to store all the products
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    }
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;