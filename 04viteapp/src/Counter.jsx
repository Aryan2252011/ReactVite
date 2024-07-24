
import { useState } from "react";

const Counter = ()=>{
    let [counter,SetCounter]=useState(0);
    let Addvalue =()=>{
         counter <=19 ?SetCounter(counter+1): alert("You can not increment value after 20")
    }
    let DecValue =()=>{
        counter>=1?SetCounter(counter-1):alert("You Can not decrease after Zero")
        
    }
    return(
    <>
    <h1> {counter}</h1>
    <br/>
    <button onClick={Addvalue}>+</button>
    <br/>
    <button onClick={DecValue} >-</button>
</>

    )

}
export default  Counter