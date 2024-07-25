import { useState,useCallback,useEffect } from 'react'


function App() {
  const [length,Setlength]= useState("8")
  const [numAllowed,SetnumAllowed]=useState(false)
  const[charAllowed,SetcharAllowed]=useState(false)
  const[password,SetPassword]= useState("")
  const [color,Setcolor]= useState("grey")



  const passwordGenrator = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str +='0123456789';
    if (charAllowed) str +='!@#$%^&*'
    for (let i =1 ;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char); 
    }
    SetPassword(pass)},
   
    
  [length,numAllowed,charAllowed,SetPassword]);

  const copyPasswordtoClip = useCallback(()=>{
    window.navigator.clipboard.writeText(password)}
    ,[password])

  useEffect(()=>{passwordGenrator(),[length,numAllowed,charAllowed,passwordGenrator]},[length,numAllowed,charAllowed,passwordGenrator]

  )

  
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
       <div className=' className= "flex shadow rounded-lg overflow-hidden mb-4"'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        
        />
        <button onClick={copyPasswordtoClip} className ='outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0 ' >Copy</button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
             type="range" 
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{Setlength(e.target.value)}}
             />
             <label > length : {length}</label>

          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{
              SetnumAllowed((prev)=>!prev)
            }}
            />
            <label >Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              SetcharAllowed((prev)=>!prev)
            }}
            />
            <label >Charectors</label>
          </div>

        </div>
        

       </div>
      </div>

    </>
  )
}

export default App
