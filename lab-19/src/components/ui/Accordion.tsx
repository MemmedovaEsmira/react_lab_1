import React,{FC, useState} from 'react';
import styles from './accordion.module.css'
import classNames from 'classnames';
import { IoIosArrowUp } from "react-icons/io";

interface IaccordionProps{
title:string,
description:string,
}

const Accordion: FC<IaccordionProps>=({title,description}) => {
const[isActive,setIsActive]=useState(false)

const handleActive=()=>{
setIsActive(prev=>!prev)
}

  return (
<>
<div className={styles['accordion-item']}>
<div onClick={handleActive} className={styles['accordion-item-title']}> 
<h2 >{title}</h2>  <IoIosArrowUp className={classNames(styles['title-icon'],{[styles['icon-active']]:isActive})}/>
    </div>

  <div className={classNames(styles['accordion-item-description'],{[styles['description-active']]:isActive})}>
     <p>{description}</p>   
   </div>

  </div>
</>
    
  )
}

export default Accordion;