import { createSlice } from "@reduxjs/toolkit";
import type { ProductInterface } from "../interfaces/interfaces";

const initialState = {
  products: [] as ProductInterface[],
  cart: [] as ProductInterface[]
}

const slice = createSlice({
  name: 'myShopStore',
  initialState: initialState,
  reducers: {
    initialFetch(state, action) {
      state.products = action.payload
    },
    addToCart(state, action) {
      state.cart = state.products.filter((product) => product.id === action.payload)
    }
  }
})

export default slice.reducer
export const { initialFetch, addToCart } = slice.actions
