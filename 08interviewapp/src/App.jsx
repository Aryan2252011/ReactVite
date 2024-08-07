import { useState } from 'react'
import './App.css'

function App() {
  const[Intialvalue,SetIntialValue]= useState(1)

  const MultiplyiedByTwo =()=>{
    SetIntialValue(Intialvalue+1)
  }

  let MulValue = Intialvalue*2 ;
  

  return (
    <>
    <h1>Intial Value:{Intialvalue} </h1>
    <button onClick={MultiplyiedByTwo}>Multiply by Two</button>
    <h2>Multiplied Value: {MulValue}</h2>

    </>
  )
}

export default App
