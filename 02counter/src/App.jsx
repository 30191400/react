import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(14)

  // let counter=10

  const addvalue=()=>{
    // console.log("value added",Math.random()); to check in console number is adding
    // console.log("clicked",counter) at last it should be comment
    // counter=counter+1;
    setCounter(counter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)

  }
  const removevalue=()=>{
    setCounter(counter-1)
  }
 
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button onClick={addvalue}>Add Value{counter}</button>
    <br/>
    <button onClick={removevalue}>Remove value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
