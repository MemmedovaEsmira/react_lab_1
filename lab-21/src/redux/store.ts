import { configureStore } from '@reduxjs/toolkit';
import CartReducer from "./CartSlice/CartSlice"

export const store = configureStore({
  reducer: {
    CartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;