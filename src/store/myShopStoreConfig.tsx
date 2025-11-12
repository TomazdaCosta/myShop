import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import myShopStore from "../store/myShopStore"

const reducer = combineReducers({ myShopStore })
const store = configureStore({ reducer })

export default store
