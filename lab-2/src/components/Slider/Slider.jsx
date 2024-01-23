import React from 'react';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import "./slider.css";
// import img1 from "../../assets/Images/img_1.jpg"

import img2 from "../assets/Images/img_2.jpg"
import img3 from "../assets/Images/img_3.jpg"

const Slider = (props) => {
  return (
    <div >
      <div className='images'>

      <GrChapterNext />
      <GrChapterPrevious />
      {/* {props.img1} */}
      {img2}
      {img3}
      </div>
        
    </div>
  )
}

export default Slider;