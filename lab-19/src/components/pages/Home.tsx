import React, { useEffect, useState } from 'react';
import Accordion from '../ui/Accordion';
import styles from './home.module.css';

interface HomeDataTypes{
id:number,
title:string,
description:string,
}

const Home:React.FC<HomeDataTypes> = () => {
const[datas,setDatas]=useState<HomeDataTypes[]>([])
async function fetchingDatas(){

const res=await fetch('https://api.sampleapis.com/coffee/iced');
const json = await res.json()
setDatas(json)
}

useEffect(()=>{
fetchingDatas()
},[])

  return (
    <div className={styles.container}>{datas.map((item)=>
    <Accordion
     key={item.id} 
     title={item.title} 
     description={item.description}/>)}
     </div>
  )
}

export default Home;