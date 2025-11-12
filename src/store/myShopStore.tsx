import { createSlice } from "@reduxjs/toolkit";
import type { ProductInterface } from "../interfaces/interfaces";

const initialState = {
  products: [] as ProductInterface[]
}

const slice = createSlice({
  name: 'myShopStore',
  initialState: initialState,
  reducers: {
    initialFetch(state, action) {
      state.products = action.payload
    }
  }
})

export default slice.reducer
export const { initialFetch } = slice.actions