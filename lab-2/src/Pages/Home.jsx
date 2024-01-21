import React from 'react'
import Slider from '../components/Slider/Slider'

import img1 from "../../src/assets/images/img_1.jpg"
import img2 from "../../src/assets/images/img_2.jpg"
import img3 from "../../src/assets/images/img_3.jpg"

const Home = () => {
  return (
    <>
      <Slider/>
      <img src={img1} alt="image" />
     <img src={img2} alt='image' />
     <img src={img3} alt='image' />
    </>
  )
}

export default Home
