import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateInterface } from "../interfaces/interfaces";

const initialState: InitialStateInterface = {
  products: [],
  cart: []
}

const slice = createSlice({
  name: 'myShopStore',
  initialState: initialState,
  reducers: {
    initialFetch(state, action) {
      state.products = action.payload
    },
    addToCart(state, action) {
      const productAdd = state.products.find((product) => product.id === action.payload)

      let exist: boolean = false
      function existProduct() {
        state.cart.forEach((product) => {
          if(product.id === action.payload) {
            exist = true
          } else {
            exist = false
          }
        })
      }

      if(productAdd) {
        existProduct()

        productAdd.quantity = 0

        if(exist === false) {
          state.cart.push(productAdd)
        }
      }
    },
  }
})

export default slice.reducer
export const { initialFetch, addToCart } = slice.actions
