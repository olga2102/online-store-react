import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productSlice";
import notificationReducer from "./notificationSlice"

export default configureStore({
    reducer: {
        productsInBasket: productReducer,
        notifications: notificationReducer
    }
});