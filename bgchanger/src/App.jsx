import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-300'
    style={{backgroundColor : color}}
    >
      <button className='mr-4 bg-orange-300'
      onClick={()=>{setColor('red')}}
      >red</button>
      <button className='mr-4 bg-orange-300'
      onClick={()=>{setColor('white')}}
      >white</button>
      <button className='mr-4 bg-orange-300'
      onClick={()=>{setColor('grey')}}
      >grey</button>
      <button className='mr-4 bg-orange-300'
      onClick={()=>{setColor('green')}}
      >green</button>
    </div>
    </>
  )
}

export default App
