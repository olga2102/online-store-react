import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productSlice";
import notificationReducer from "./notificationSlice";
import authReducer from "./authSlice";

export default configureStore({
    reducer: {
        productsInBasket: productReducer,
        notifications: notificationReducer,
        auth: authReducer,
    }
});