import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card"
import "./App.css"
import Modal from "./components/Modal/Modal";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios('https://dummyjson.com/products').then((res)=>
        setData(res.data.products)
        );
    }, []);

  return (
<div>
    <div className="cards_wrapper">
        {data.map((item): any =>(
              <Card  key={item.id} item={item}/>           
          ))}
          </div>
    <div>
        <Modal/>
    </div>
    </div>
  )
};

export default App;
