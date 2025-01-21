import React from "react";

const RenderTodos = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div className="max-w-[550px] mt-4 bg-slate-400 py-4 px-2 rounded-md mx-auto flex justify-between">
          <h2 className="text-2xl">
          {todo}
          </h2>
          <div>
            <input className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" name="" id="" />
            <button class="relative inline-flex items-center justify-center p-0.5 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Delete
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderTodos;
