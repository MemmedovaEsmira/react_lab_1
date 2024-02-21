// import React from 'react';
import {  useDispatch } from 'react-redux';
import { addItem } from '../../redux/CartSlice/CartSlice';
import styles from "./card.module.css";

const Card = ({item}:any) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.card}>
     <h2 className={styles.card_title}>{item.title}</h2>
     <button onClick={() =>dispatch(addItem(item))}>Add to cart</button>
    </div>
  );
};

export default Card;
