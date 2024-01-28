// import React, {useState} from 'react';
import Slider from '../components/Slider/Slider'
import img1 from "../assets/Images/img_1.jpg"



function  Home  ()  {
  const Images=[
   {img: img1,
    id: 1},
  ]
 

  return (
        <>
       
         {Images.map((item)=>{
         return <Slider 
          Images={item.img} 
          key={item.id} 
          />
        })}
          </>
        );
    
}

export default Home;
