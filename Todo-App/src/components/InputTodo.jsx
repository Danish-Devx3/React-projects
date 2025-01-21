import React from 'react'

const InputTodo = ({inputTodo, setInputTodo, addTodo}) => {
  return (
    <div className='' >
      <div className='flex justify-between' >
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3 px-32' type="text" placeholder='Add Todo Here' value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)} />
        <button onClick={addTodo} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center ">Add</button>
      </div>
    </div>
  )
}

export default InputTodo
