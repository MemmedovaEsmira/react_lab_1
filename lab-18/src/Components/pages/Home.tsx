import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import Card from '../Card/Card'
import styles from './home.module.css'

interface HomeDataTypes{
title:string,
image:string,
id:number
}

const Home:React.FC <HomeDataTypes>= () => {

const[data,setData]=useState<HomeDataTypes[]>([])
const[input,setInp]=useState('')

async function dataFetching(){
const res=await fetch('https://api.sampleapis.com/coffee/iced');
const json=await res.json()
setData(json)
}

useEffect(()=>{
dataFetching()
},[])

const filtered=data?.filter((item)=>item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase().trim()))

return (
    <>
     <div className={styles.container}>
     <Input setInp={setInp}/>
    <div className={styles['container_title_box']}>
     
{filtered.map((item)=> 
<Card title={item.title} 
 img={item.image} 
 key={item.id} />)}   
  </div>

</div>     
    </>
  )
}

export default Home;