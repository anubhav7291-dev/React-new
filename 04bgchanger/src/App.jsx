import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <button className='bg-white mr-4'
      onClick={()=>setcolor('red')}
      >red</button>
      <button className='bg-white mr-4'
      onClick={()=>setcolor('grey')}
      >grey</button>
      <button className='bg-white mr-4'
      onClick={()=>setcolor('green')}
      >green</button>
      <button className='bg-white mr-4'
      onClick={()=>setcolor('white')}
      >white</button>
    </div>
    </>
  )
}

export default App
