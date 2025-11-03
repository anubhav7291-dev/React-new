import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let counter = 15

   const addValue = () => {
    console.log('clicked',Math.random());
    
    counter = counter + 1
   }

  return (
    <>
      <h1>counter test</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button>decrease value</button>
    </>
  )
}

export default App
