import React from 'react';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import "./slider.css";


const Slider = (props) => {
  return (
    <div >
      <GrChapterNext />
      <GrChapterPrevious />

    </div>
  )
}

export default Slider;