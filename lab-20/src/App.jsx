import { useState } from 'react';
import { AppContext } from '../context/appContext';
import AgeCalculator from './components/AgeCalculator';


// const AppContext = createContext (null);

const  App = () => {
  const [state] = useState()
  return (
    <>
<AppContext.Provider value={state}>
<AgeCalculator/>
</AppContext.Provider>
    </>
  )
}

export default App


