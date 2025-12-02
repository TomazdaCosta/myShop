import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateInterface } from "../interfaces/interfaces";

const initialState: InitialStateInterface = {
  products: [],
  cart: [],
  order: []
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

        productAdd.quantity = 1

        if(exist === false) {
          state.cart.push(productAdd)
        }
      }
    },
    deleteToCart(state, action) {
      state.cart = state.cart.filter((product) => product.id !== action.payload)
    },
    changeQuantityToProduct(state, action) {
      const product = state.cart.find((product) => product.id === action.payload.id)

      if(product && action.payload.type === 'add') {
        product.quantity += 1
      } if (product && action.payload.type === 'sub' && product.quantity > 1) {
        product.quantity -= 1
      }
    },
    addOrder(state, action) {
      state.order.push(action.payload)
    },
    cleanCart(state) {
      state.cart = []
    }
  }
})

export default slice.reducer
export const { initialFetch, addToCart, deleteToCart, changeQuantityToProduct, addOrder, cleanCart } = slice.actions
