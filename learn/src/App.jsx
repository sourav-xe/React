import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const Increase = ()=>{
  setCount(count+1)
 } 
 const Decrease = ()=>{
  if(count>0){
    setCount(count-1)
  }
 else{
  <p>Cant</p>
}
 } 
 const Reset = ()=>{
  setCount(0)
 } 
 

  return (
    <>
      <h1>Making Counter </h1>
      <h3>click on button to increase the number</h3>
      <h1>Current value :-{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}> Decrease</button>
      <button onClick={Reset}> Reset</button>
     
    </>
  )
}

export default App
