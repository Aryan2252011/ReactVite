import { useState } from 'react'

import './App.css';
import Card from './components/Card';


function App() {
  // const [count, setCount] = useState(0)
  // const AddValue =()=>{
  //    count<20 ? setCount(count+1) : alert("Limit Exceeded");
  // }
  // const RemoveValue =()=>{
  //    count >0 ? setCount(count-1) :alert("Limit Exceeded");
  // }

  return (
    <>
      {/* <h1  className='bg-green-500 p-2 rounded-xl ' >My First React App</h1>
      <h2  >{count}</h2>
      <button  onClick={AddValue}>Add</button><br/><br/>
      <button onClick={RemoveValue}>Remove</button> */}
      <Card userName ="Aryan verma"/>
      <Card userName ="Aditya Saini" />
      

       
    </>
  )
}

export default App
