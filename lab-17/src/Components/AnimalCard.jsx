import { useState } from 'react';
import  './AnimalCard.css';
import {animal} from '../assets/Images/Data.jsx'
import img7 from '../assets/Images/heart.svg'

  const AnimalCard = (props) => {
    const [click, setClick] = useState(0)
    const handleClick = () => {
       setClick(click + 1)
    }
    return (  
      <>  
       <div className='card' onClick={handleClick}>     
     <img src= {animal[props.title]} alt="image" />  
     <img  src={img7} alt="image" style={{width: 10 * click}} /> 
      </div>
      </>
    )
  }


  export default AnimalCard;