import React from 'react'
import CreateTodo from './components/CreateTodo'
import TodosList from './components/TodosList'

function App() {
  return (
    <>
      <div className=" pb-20 font-body bg-bg-desktop-dark bg-no-repeat bg-cover">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="uppercase text-[40px] font-bold text-VeryLightGray pt-16 pb-10">
            Todo
          </h1>
          <CreateTodo />
        </div>
      </div>
      <TodosList />
    </>
  )
}

export default App
