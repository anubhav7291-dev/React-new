import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MYapp(){
  return(
    <h1>just checking</h1>
  )
}

// const Reactelement={
//     type : 'a',
//     props : {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const username = 'Anubhav'

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  username
)

createRoot(document.getElementById('root')).render(
  
  reactelement
  
)
