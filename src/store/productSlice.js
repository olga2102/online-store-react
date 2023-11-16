import { createSlice } from '@reduxjs/toolkit';

function GetSavedProducts() {
  const savedProducts = localStorage.getItem("products");

  if(savedProducts.length) return JSON.parse(savedProducts);

  return [];
}

const productSlice = createSlice({
    name: 'productsInBasket',
    initialState: {
        productsInBasket: GetSavedProducts()
    },
    reducers: {
      addToBasket(state, action) {
        const index = state.productsInBasket.findIndex((item) => item.id === action.payload.id);
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
      },

      changeCount(state, action) {
        state.productsInBasket.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count = Number(action.payload.value);
          }
        });
      },
      
      plusCount(state, action) {
        state.productsInBasket.forEach((item) => {
          if (item.id === action.payload) {
            item.count = item.count + 1;
          }
        })
      },

      minusCount(state, action) {
    
        const index = state.productsInBasket.findIndex((item) => item.id === action.payload);

        if (state.productsInBasket[index].count > 1) {
          state.productsInBasket[index].count = state.productsInBasket[index].count - 1;
        } else {
          state.productsInBasket = state.productsInBasket.filter(item => item.id !== action.payload);   
        }     
        
      }
    },
  });

  export const {addToBasket, removeProduct, changeCount, plusCount, minusCount} = productSlice.actions;
  export default productSlice.reducer;