import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import Game from './components/Game'

function App() {
  const [startGame, setStartGame] = useState(true)

  const toggle = () =>{
    setStartGame((prev)=>!prev)
  }

  return (
   <>
   {startGame ? <Game/> : <StartGame toggle={toggle}/>}
   
   </>
  )
}

export default App
