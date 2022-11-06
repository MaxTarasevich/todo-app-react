import React, { useEffect, useState } from 'react'
import Todo from './Todo'


interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

const TodosList = () => {

const [data,setData] = useState<TodoInterface[] | undefined>()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className=" px-2 max-w-4xl mx-auto -mt-14 text-center">
      {data ? data.map((todo :TodoInterface)=>(
        <Todo key={todo.id} {...todo} />
      )): 'Loading'}
    </div>
  )
}

export default TodosList
