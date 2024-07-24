import { useState } from 'react'

import './App.css'

function App() {
  const [color,Setcolor]= useState("Red");

  return (
    <>
      <h1>Bg Changer</h1>
      <body style={{backgroundColor:color, width:100}}></body>
      <div>
        <button onClick={()=>Setcolor("green")}>Green</button>
        <button onClick={()=>Setcolor("yellow")}>yellow</button>
        <button onClick={()=>Setcolor("Blue")}>Blue</button>
        <button onClick={()=>Setcolor("olive")}>Olive</button>
      </div>
    </>
  )
}

export default App
