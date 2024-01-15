import Card from "../components/Card/Card";
import "./Main.css";


const Main = () => {
    return <div className="Main">      
            <Card/>

    </div>; 
    
};

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
     price: 30000,
     id: 20,
  },

{
     title: "Porsche",
     price: 100000,
     id: 30,
  },


];

export default Main;