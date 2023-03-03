const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [], // Array to store all the products
  cart: [], // Array to store items added to the cart
  total: 0 // Total price of items in the cart
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      state.total = state.total - action.payload.price;
    }
  }
});

export const { addProduct, addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;