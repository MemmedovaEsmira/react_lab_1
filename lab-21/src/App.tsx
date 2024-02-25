// import  { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./components/Card/Card"
// import "./App.css"
// import Modal from "./components/Modal/Modal";
// import Header from "./Common/Header/Header"

// const App = () => {
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//         axios('https://dummyjson.com/products').then((res)=>
//         setData(res.data.products)
//         );
//     }, []);

//   return (
// <div>
//     <div className="cards_wrapper">
//         {data.map((item): any =>(
//               <Card key={item} item={item}/>           
//           ))}
//           </div>
//     <div>
//         <Modal/>
//         <Header/>
//     </div>
//     </div>
//   )
// };

// export default App;

import Header from "./Common/Header/Header"
import Main from "./Common/Main/Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Contacts from "./Pages/Contacts/Contacts"
import About from "./Pages/About/About"

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Main />

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

      </Router>
    </>

  )
}

export default App