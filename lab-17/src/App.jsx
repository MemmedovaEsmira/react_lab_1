import{useState} from 'react'

import  AnimalCard from'./Components/AnimalCard.jsx'
import './App.css'

function App() {

  const [animal,setAnimal] = useState([])

 const AnimalNames=[
"img1",
"img2",
"img3",
"img4",
"img5",
"img6",
"img7"
 ]

 function getRandomAnimal() {
  return AnimalNames[Math.floor(Math.random()*AnimalNames.length)]
 }

 function handleAnimal() {
  setAnimal([...animal,getRandomAnimal()])

 }



  return (
    <>
     <div className='card_btn'>
     <button onClick={handleAnimal}>Click</button>
     </div>
     <div className='card_img'>
      {animal.map((item) => <AnimalCard 
      title={item}
 
      />)}
     </div>

    
    </>
  )


}

export default App;

