import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },
    },
    extraReducers: (builder) => {
        // You can add extra reducers here if needed
    },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// This code defines a Redux slice for managing a shopping cart.
// It includes actions for adding items to the cart, removing items, and clearing the cart.
// The slice maintains the state of the cart, including the items, total amount, and total quantity.