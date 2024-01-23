import React, {useState} from 'react';
import Slider from '../components/Slider/Slider'
import img1 from "../assets/Images/img_1.jpg"

import img2 from "../assets/Images/img_2.jpg"
import img3 from "../assets/Images/img_3.jpg"


function  Home  ()  {
  const Images=[
    "img1",
    "img2",
    "img3",
  ]
 

     return <Slider
     img1={img1}
     img2={img2}
     img3={img3}
      />
   
}

export default Home;
