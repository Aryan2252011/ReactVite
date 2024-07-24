import React from "react";
import { useState } from "react";

const Bgchange =()=>{

    const [color,Setcolor]= useState("olive");
    return (
        <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
            
            <button style={{backgroundColor:"black"}} onClick={()=>Setcolor("Black")}>Black</button>
            <button style={{backgroundColor:"red"}} onClick={()=>Setcolor("red")}>Red</button>
            <button style={{backgroundColor:"green"}} onClick={()=>Setcolor("green")}>Green</button>
            <button style={{backgroundColor:"yellow"}} onClick={()=>Setcolor("yellow")}>Yellow</button>
            <button style={{backgroundColor:"purple"}} onClick={()=>Setcolor("purple")}>Purple</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>Setcolor("blue")}>Blue</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>Setcolor("orange")}>Orange</button>
             
        </div>
    )
}

export default Bgchange ;