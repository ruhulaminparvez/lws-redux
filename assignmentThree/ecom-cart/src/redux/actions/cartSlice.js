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
            state.total = state.cart.reduce((total, item) => total + parseInt(item.productPrice) * parseInt(item.productQuantity), 0);
            state.counter = state.cart.reduce((total, item) => total + parseInt(item.productQuantity), 0);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.total = state.cart.reduce((total, item) => total + parseInt(item.productPrice) * parseInt(item.productQuantity), 0);
            state.counter = state.cart.reduce((total, item) => total + parseInt(item.productQuantity), 0);
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.productQuantity = parseInt(item.productQuantity) + 1;
                }
                return item;
            });
            state.total = state.cart.reduce((total, item) => total + parseInt(item.productPrice) * parseInt(item.productQuantity), 0);
            state.counter = state.cart.reduce((total, item) => total + parseInt(item.productQuantity), 0);
        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.productQuantity = parseInt(item.productQuantity) - 1;
                }
                return item;
            });
            state.total = state.cart.reduce((total, item) => total + parseInt(item.productPrice) * parseInt(item.productQuantity), 0);
            state.counter = state.cart.reduce((total, item) => total + parseInt(item.productQuantity), 0);
        }
    }
});

export const { addToCart, removeFromCart,  increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;