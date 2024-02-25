import  { useEffect, useState } from 'react'
import styles from './main.module.css'
import Home from '../../Pages/Home/Home'
import axios from 'axios';


const Main = () => {

const [data, setData] = useState([]);
useEffect(()=>{
    axios('https://dummyjson.com/products').then((res)=>
    setData(res.data.products)
    );
}, []);

  return (
    <>
   <main className={styles.main}>
   <Home data={data}/>
   </main>
</>

  )
}

export default Main