import React, { useState } from 'react'
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import CreateTodo from './CreateTodo'

interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  userId: number
  id: number
  title: string
  completed: boolean
  completeTodo: (id: number) => void
  deleteTodo: (id: number) => void
  addTodo: (todo: TodoInterface) => void
  editTodo: (id: number, title: string) => void
}

const Todo: React.FC<Props> = ({
  userId,
  id,
  title,
  completed,
  completeTodo,
  deleteTodo,
  addTodo,
  editTodo,
}) => {
  const [edit, setEdit] = useState(false)

  function changeEdit() {
    setEdit(false)
  }

  return edit ? (
    <CreateTodo
      addTodo={addTodo}
      title={title}
      id={id}
      changeEdit={changeEdit}
      editTodo={editTodo}
    />
  ) : (
    <div
      className="mb-4 min-w-[60%] max-w-full p-5 inline-flex gap-5 items-center rounded-lg shadow-md shadow-DarkBlue
     text-VeryDarkGrayishBlue bg-VeryLightGray hover:bg-LightGrayishBlue hover:scale-105 hover-transitions"
    >
      {completed ? (
        <AiFillCheckCircle
          className="iconsStyle"
          onClick={() => completeTodo(id)}
        />
      ) : (
        <BsCircle className="iconsStyle" onClick={() => completeTodo(id)} />
      )}

      <span
        className={`flex-1 px-2 md:px-8 text-sm md:text-lg break-all hover-transitions ${
          completed ? 'line-through opacity-60' : ''
        } `}
      >
        {title}
      </span>
      <AiFillEdit className="iconsStyle" onClick={() => setEdit(!edit)} />
      <AiFillDelete className="iconsStyle" onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default Todo
