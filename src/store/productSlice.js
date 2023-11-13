import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'productsInBasket',
    initialState: {
        productsInBasket: []
    },
    reducers: {
      addToBasket(state, action) {
        const index = state.productsInBasket.findIndex((item) => item.id === action.payload.id)
        if (index >= 0) {
          state.productsInBasket[index].count = state.productsInBasket[index].count + 1;
        } else { 
          state.productsInBasket.push({
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            count: 1
          })
        }
      },
      removeProduct(state, action) {
        state.productsInBasket = state.productsInBasket.filter(item => item.id !== action.payload)
      }
    },
  });

  export const {addToBasket, removeProduct} = productSlice.actions;
  export default productSlice.reducer;