import Card from "../components/Card/Card";
import "./Main.css";

import React from 'react'

function Main() {
const cars =
[
  {
     title: "Kia-",
     price:50000 ,
     id: 1,
  },

  {
     title: "Hundai-",
     price: 60000,
     id: 2,
  },

{
     title: "BMW-",
     price: 75000,
     id: 3,
  },

{
     title: "Ford-",
     price: 30000,
     id: 4,
  },

{
     title: "Porsche-",
     price: 100000,
     id: 5,
 },

]
return (
  <>
 
   {cars.map((item)=>{
   return <Card 
    title={item.title} 
    text={item.price} 
    key={item.id} 
    />
  })}
    </>
  );
}


export default Main;