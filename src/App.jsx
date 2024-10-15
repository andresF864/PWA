import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import Calculadora from './componentes/Calculadora.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Calculadora/>
      <PWABadge />
    </>
  )
}

export default App