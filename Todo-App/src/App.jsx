import React, { useState } from 'react'
import InputTodo from './components/InputTodo'
import RenderTodos from './components/RenderTodos'

const App = () => {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  function addTodo(){
    setTodos((prev)=>[...prev,inputTodo]);
    setInputTodo('')
  }
  console.log(todos)

  return (
    <div className='max-w-[720px] mx-auto' >
      <h1 className='text-center font-bold text-8xl mb-8' >Task Manager</h1>
      <InputTodo inputTodo={inputTodo} setInputTodo={setInputTodo} addTodo={addTodo} />
      <RenderTodos todos={todos}/>
    </div>
  )
}

export default App
