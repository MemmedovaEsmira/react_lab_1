// // import { useState } from 'react'

// import './App.css'
// import Input from './Components/Input/Input'
// import Card from "./Components/Card/Card"


// import { useState, useEffect } from "react";

// const App = () => {
//   const DATA_URL = ('https://dummyjson.com/products');

  
//   const [posts, setPosts] = useState([]);
//   const [inputVlue, setInputValue] = useState("");

//   useEffect(() => {
 
  
//     const fetchUsingPromiseWithFetchApi = () => {
//       fetch(DATA_URL) 
//         .then((response) => response.json())
//         .then((data) => {
//           setPosts(data.products); 
//         });
//     };

    
//     fetchUsingPromiseWithFetchApi();

//   }, []); 

//   const filteredData = data.filter((item:IDataProps) =>
//   item.brand.toLowercase()
//   )
//   return (
//     <>
//     <div className="container">
//       <Card/>
//       <Input/>
//    </div>
//     </>
//   );
//   }

// export default App;
