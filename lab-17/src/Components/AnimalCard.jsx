import  './AnimalCard.css';

import {animal} from '../assets/Images/Data.jsx'


  const AnimalCard = (props) => {
    return (
      
      <>  
       <div className='card'>     
     <img src= {animal[props.title]} alt="image" />   
      </div>
      </>
    )
  }


  export default AnimalCard;