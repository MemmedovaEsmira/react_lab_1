import React from 'react'
import { IoSearch } from "react-icons/io5";
import styles from './input.module.css';

interface InputDataTypes{
setInp:(value:string)=>void
}

const Input:React.FC <InputDataTypes> = ({setInp}) => {
  const handleInpValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInp(e.target.value)
  }

  return (
    <>
       <div className={styles.container}>
     <div className={styles.container_input}> 
     <input className={styles.container_input_item} type="text" placeholder={"search"} onChange={handleInpValue} />
     <IoSearch  className={styles.input_icon}/> 
     </div>

   </div>
    </>
  )
}

export default Input;