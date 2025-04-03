
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let upvalue = () => {
    setCount(count + 1)
  }
  let downvalue = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={upvalue}>+1</button>
      <br />
      <button onClick={downvalue}>-1</button>
    </>
  )
}

export default App
