import { useState,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [length,setLength]= useState(8)
const [numberallowed,setNumberAllowed]= useState(false);
const [CharAllowed,setCharAllowed]= useState(false)
const [Password,setPassword]= useState('')

const Passwordref=useRef(null)


const generatepassword=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberallowed) str+="0123456789"
if(CharAllowed) str+="!@#$%^&*-_+=[]{}~`"

for(let i=1;i<length;i++){
  const char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass)
},[length,numberallowed,CharAllowed])

useEffect(()=>{
  generatepassword()},
  [length,numberallowed,CharAllowed]
)

const copyPasswordToClipboard=()=>{
  window.navigator.clipboard.writeText(Password)
  Passwordref.current.select()
}
  return (
    <>
      <h1 className='text-4xl text-center textcolour=white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={Passwordref}
        />
         <button 
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        name="" 
        id=""
         />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
       <input type="checkbox"
       defaultChecked={numberallowed}
       onChange={()=>{
        setNumberAllowed((prev)=>!prev)
       }}
       />
       <label htmlFor="numbers">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
       <input type="checkbox"
       defaultChecked={CharAllowed}
       onChange={()=>{
        CharAllowed((prev)=>!prev)
       }}
       />
       <label htmlFor="charInput">Character</label>
        </div>
        
      </div>
    </>
  )
}

export default App
