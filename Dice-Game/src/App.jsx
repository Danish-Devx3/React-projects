import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import Game from './components/Game'

function App() {
  const [startGame, setStartGame] = useState(false)

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
