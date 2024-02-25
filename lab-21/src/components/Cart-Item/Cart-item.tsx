
import { FC } from 'react';
import { IProduct } from '../Card/Card';
import styles from './cart-item.module.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, } from 'react-redux';
import { removeItem, incrementCount, decrementCount } from '../../redux/CartSlice/CartSlice';
import { CiTrash } from "react-icons/ci";


interface ICartItem {
    item: IProduct;
}

const Cart_item: FC<ICartItem> = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className={styles['cart_item']}>
                <div className={styles['cart_item_image']}> <img src={item.image} alt="product" /></div>
                <div className={styles['cart_item_count']}>
                    <button onClick={() => dispatch(incrementCount(item))}> +</button>
                    <span>{item.count}</span>
                    <button onClick={() => dispatch(decrementCount(item))}>-</button>
                </div>
                <div className={styles['cart_item_title']}>
                    <p>{item.title}</p> </div>

                <div className={styles['cart_item_buttons']}>
                    <span><RiDeleteBin6Fill className={styles.delete} onClick={
                        () => dispatch(removeItem(item))} /></span>
                        
                         <CiTrash className={styles.delete_btn} onClick={
                () => dispatch(removeItem(item))} />
                    <span className={styles.price}>${Math.round(item.price) * item.count}</span>
                </div>
            </div>
        </>

    )
}

export default Cart_item