import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed,setNUmberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz'
    let number = '1234567890'
    let char = '!@#$%^&*()'
    if (numberAllowed) str += number
    if (charAllowed) str += char
    for(let i=0;i<lenght;i++){
      let index = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  },[lenght,numberAllowed,charAllowed])

  const copyToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  },[password])

  useEffect(()=>{
    passwordGenerator()
    
  },[lenght,numberAllowed,charAllowed])

  const passRef = useRef()

  return (
    <>
    <div>
      <input type='text'
      value={password}
      placeholder='password'
      ref={passRef}
      readOnly
      ></input>
      <button
      onClick={copyToClipBoard}
      >copy</button>
    </div>
    <div>
      <input type="range"
       value={lenght}
       min={8}
       max={25}
       onChange={(e)=>{setLenght(e.target.value)}}
      />
      <label>Lenght : {lenght}</label>
      <input type='checkbox'
      defaultChecked={numberAllowed}
      onChange={()=>{setNUmberAllowed((prev)=>!prev)}}
      ></input>
      <label>number</label>
      <input type='checkbox'
      defaultChecked={charAllowed}
      onChange={()=>{setCharAllowed((prev)=>!prev)}}
      ></input>
      <label>Characters</label>
    </div>
    </>
  )
}

export default App
