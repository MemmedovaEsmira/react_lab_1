// // import React from 'react';
// import {  useDispatch } from 'react-redux';
// import { addItem } from '../../redux/CartSlice/CartSlice';
// import styles from "./card.module.css";

// const Card = ({item}:any) => {
//   const dispatch = useDispatch()
//   return (
//     <div className={styles.card}>
//      <h2 className={styles.card_title}>{item.title}</h2>
//      <button onClick={() =>dispatch(addItem(item))}>Add to cart</button>
//     </div>
//   );
// };

// export default Card;


import { FC } from 'react'
import styles from './card.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice/CartSlice';


export interface IProduct {
    id: number;
    title: string;
    image: string;
    count: number;
    price:number;

}

interface CardDataTypes {
    id: number;
    title: string;
    image: string;
    item: IProduct;
    price:number
}


const Card: FC<CardDataTypes> = ({ title,item, image }) => {

    const dispach = useDispatch()

    return (

        <>
            <div className={styles.card}>
                <div className={styles.card_title}>
                    <h3>{title}</h3>
                </div>


                <div className={styles.card_image}>
                    <img src={image} alt="img" />

                </div>

                <button onClick={() => dispach(addToCart(item))}>Remove Item</button>
            </div>
        </>

    )
}

export default Card