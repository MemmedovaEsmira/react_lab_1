import React from 'react';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import "./slider.css";
import img1 from "../../assets/images/download.jpg"

const Slider = (props) => {
  return (
    <div >
      <GrChapterNext />
      <GrChapterPrevious />

     <img src={img1} alt="image" />
     <img src={img2} alt='image' />

    </div>
  )
}

export default Slider;