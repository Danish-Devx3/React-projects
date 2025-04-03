import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>          
      <div className='w-full  h-screen'
        style={{ backgroundColor: color }}>

        <div className='bg-white h-6 fixed flex flex-wrap justify-evenly items-center bottom-12 inset-x-0 h-9 shadow-2xl'>
          < div className='flex gap-9 shadow-lg'>
            <button className=' rounded-2xl px-6 h-6 flex' onClick={() => setColor("aqua")} style={{ backgroundColor: 'aqua' }}>Aqua</button>
            <button onClick={() => setColor("fuchsia")} className=' rounded-2xl px-6' style={{ backgroundColor: 'fuchsia' }}>Fuchsia</button>
            <button onClick={() => setColor("orange")} className=' rounded-2xl px-6' style={{ backgroundColor: 'orange' }}>Orange</button>
            <button onClick={() => setColor("blue")} className=' rounded-2xl px-6' style={{ backgroundColor: 'blue' }}>Blue</button>
            <button onClick={() => setColor("olive")} className=' rounded-2xl px-6' style={{ backgroundColor: 'olive' }}>Olive</button>
            <button onClick={() => setColor("green")} className=' rounded-2xl px-6' style={{ backgroundColor: 'green' }}>Green</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
