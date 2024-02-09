import React from 'react'
import styles from './card.module.css'

interface CardDataTypes{

title:string,
img:string,
key:number
}


const Card:React.FC <CardDataTypes> = ({title,img}) => {
  return (
    <>
      <div className={styles.title_card}>   
       {title} <img src={img} alt="" />
     </div> 
    </>
  )
}

export default Card;
