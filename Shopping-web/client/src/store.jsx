import { configureStore } from "@reduxjs/toolkit";
import appReducer  from "./redux/slices/appSlice"
import productsReducer from "./redux/slices/productsSlice"
import basketReducer from "./redux/slices/BasketSlice"

export const store = configureStore({
    reducer:{
        app:appReducer,
        product:productsReducer,
        Baskets:basketReducer
    },
})