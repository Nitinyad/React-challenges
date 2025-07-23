import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQComp from './FAQComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Frequently asked questions?</h1>
      <FAQComp/>
    </>
  )
}

export default App
