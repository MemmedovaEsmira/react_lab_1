// import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { removeItem } from '../../redux/CartSlice/CartSlice';

const Modal = () => {
    const addedProducts = useSelector(
      (state: RootState) => state.CartReducer.items
    );
    const dispatch = useDispatch();
  return (
    <div>
      {
        addedProducts.map((item)=>(
        <div key={item.id}>
            <h2>{item.title}</h2>
            <button onClick={()=>dispatch(removeItem(item.id))}>Remove Item</button>
        </div>
        ))}
    </div>
  )
}

export default Modal
