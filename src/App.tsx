import React, { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodosList from './components/TodosList'

interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  const [data, setData] = useState<TodoInterface[] | undefined>()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((data) => {
        data.length = 4
        return setData(data)
      })
  }, [])

  function addTodo(todo: TodoInterface) {
    if (data) {
      setData([todo, ...data])
    } else {
      setData([todo])
    }
  }

  function completeTodo(id: number) {
    if (data) {
      const newData = data.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed
        }
        return el
      })
      setData(newData)
    }
  }

  function deleteTodo(id: number) {
    if (data) {
      const newData = data.filter((el) => el.id !== id)
      setData(newData)
    }
  }

  function editTodo(id: number, title: string) {
    if (data) {
      const newData = data.map((el) => {
        if (el.id === id) {
          el.title = title
        }
        return el
      })
      setData(newData)
    }
  }

  return (
    <>
      <div className=" pb-20 font-body bg-bg-desktop-dark bg-no-repeat bg-cover">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="uppercase text-[40px] font-bold text-VeryLightGray pt-16 pb-10">
            Todo
          </h1>
          <CreateTodo addTodo={addTodo} />
        </div>
      </div>
      <TodosList
        data={data}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        editTodo={editTodo}
      />
    </>
  )
}

export default App
