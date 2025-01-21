import React from 'react'

const RenderTodos = ({todos}) => {
    console.log(todos)
  return (
    <div>
      {todos.map((todo)=>
        <div>
            {todo}
            <input type="checkbox" name="" id="" />
            <button>Delete</button>
        </div>
      )}
    </div>
  )
}

export default RenderTodos
