import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input
      type="text"
      
     />
     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
      copy
     </button>
     </div>
     </div>
    </>
  )
}

export default App
