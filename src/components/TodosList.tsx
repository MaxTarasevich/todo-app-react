import React from 'react'
import Todo from './Todo'

interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  data: TodoInterface[] | undefined
  completeTodo:(id: number)=> void
  deleteTodo:(id: number)=>void
}

const TodosList: React.FC<Props> = ({ data, completeTodo, deleteTodo }) => {
  return (
    <div className=" px-2 max-w-4xl mx-auto -mt-14 text-center">
      {data ? data.map((todo) => <Todo key={todo.id} {...todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>) : 'Loading'}
    </div>
  )
}

export default TodosList
