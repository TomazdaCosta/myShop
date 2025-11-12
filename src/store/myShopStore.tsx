import { createSlice } from "@reduxjs/toolkit";

interface MyShopInterface {
  count: number
}

const initialState: MyShopInterface = { count: 2 }

const slice = createSlice({
  name: 'myShopStore',
  initialState: initialState,
  reducers: {}
})

export default slice.reducer
