import { Suspense } from 'react';
import './App.css';
import Bottles from './component/bottles/Bottles';

function App() {
  const bottlePromise=fetch("../public/bottles.json").then(res=>res.json());


  return (
    <>
    
    <Suspense fallback={<h3>Bottles data is loading...</h3>}>
      <Bottles bottlePromise={bottlePromise} ></Bottles>

    </Suspense>

     
  
      <h1>Vite + React</h1>
 
    </>
  )
}

export default App
