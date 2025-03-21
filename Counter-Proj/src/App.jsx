import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue=()=>{
    setCounter(counter+1);
  }
  const removeVal=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Trying Something</h1>
      <h2>counter Value: {counter} </h2>

      <button onClick={addValue}> Add Value</button>

      <button onClick={removeVal}> Remove Value</button>
    </>
  )
}

export default App
