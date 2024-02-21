import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface ICart {
  items: any[];
}

const initialState: ICart = {
  items: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addItem : (state, action: PayloadAction<any>) => {
    state.items.push(action.payload)
   },
   removeItem:(state, action:PayloadAction<number>) =>{
    state.items = state.items.filter((item)=>item.id!= action.payload)
   }
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;