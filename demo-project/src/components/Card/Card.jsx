import React from 'react'
import Button from '../Button/Button'
import "./Card.css";

const Card = (props) => {
  return (
    <>
   <div className='Cards'>
      <div className='Card'>

      <Button/>
      {props.title}
      {props.text}
      </div>
    </div>
    </>
  )
}

export default Card
