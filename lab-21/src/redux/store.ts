
import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./CartSlice/CartSlice";
import isActiveSliceReducer from "./CartSlice/isActiveSlice";

export const store = configureStore({

reducer:{
addToCartReducer,
isActiveSliceReducer
}
})


export type RootState=ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch