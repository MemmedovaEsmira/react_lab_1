import Card from "../components/Card/Card";
import "./Main.css";

function Main() {
const cars =
[
  {
     title: "Kia",
     price:50000 ,
     id: 10,
  },

  {
     title: "hundai",
     price: 60000,
     id: 15,
  },

{
     title: "BMW",
     price: 75000,
     id: 25,
  },

{
     title: "Ford",
     price: "30000",
     id: 20,
  },

{
     title: "Porsche",
     price: 100000,
     id: 30,
 },

]
return (
    <div className="card_items">
        {
            cars.map((item)=> (

        // <Card cars="title"   price= "price" key={item.id } />
         <Card title="title"   price= "price" key={item.id } />
            ))}
    </div>
)

};


export default Main;