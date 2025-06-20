import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from './slices/cartSlice';
// This code imports the configureStore function from Redux Toolkit and the cartReducer from a slices file.
// It then creates a Redux store using configureStore, passing in the cartReducer as part of the reducer object.
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }});
export default appStore;
// This file sets up a Redux store using Redux Toolkit's configureStore function.
// You can add your reducers to the store by modifying the reducer object.
// The store can be used to manage the state of your application in a predictable way.
// You can import this store in your main application file and provide it to your React application using the Provider component from react-redux.
// This allows you to connect your React components to the Redux store and access the state and dispatch actions.
// You can also add middleware, enhancers, and other configurations to the store as needed.
// For example, you can add thunk middleware for handling asynchronous actions or logger middleware for debugging.