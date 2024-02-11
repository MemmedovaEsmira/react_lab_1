import { useState } from 'react';
import { AppContext } from '../context/appContext';
import Card from "./components/Card"


// const AppContext = createContext (null);

const  App = () => {
  const [state] = useState()
  return (
    <>
<AppContext.Provider value={state}>
<Card/>
</AppContext.Provider>
    </>
  )
}

export default App
