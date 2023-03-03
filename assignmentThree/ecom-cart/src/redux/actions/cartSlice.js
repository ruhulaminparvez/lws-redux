const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [], // Array to store items added to the cart
    total: 0, // Total price of items in the cart
    counter: 0 // Total number of items in the cart
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = parseInt(state.total) + parseInt(action.payload.productPrice);
            state.counter = state.cart.length;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.total = parseInt(state.total) - parseInt(action.payload.productPrice);
            state.counter = state.cart.length;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;