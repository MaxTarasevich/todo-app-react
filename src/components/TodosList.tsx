import React from 'react'
import InfoPanel from './InfoPanel'
import Todo from './Todo'

interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  data: TodoInterface[] | undefined
  completeTodo: (id: number) => void
  deleteTodo: (id: number) => void
  addTodo: (todo: TodoInterface) => void
  editTodo: (id: number, title: string) => void
}

const TodosList: React.FC<Props> = ({
  data,
  completeTodo,
  deleteTodo,
  addTodo,
  editTodo,
}) => {
  const notComplited = data?.filter((el) => !el.completed).length

  return (
    <div className=" px-2 max-w-4xl mx-auto -mt-14 text-center">
      <InfoPanel items={notComplited} />
      {data
        ? data.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              addTodo={addTodo}
              editTodo={editTodo}
            />
          ))
        : 'Loading'}
    </div>
  )
}

export default TodosList
