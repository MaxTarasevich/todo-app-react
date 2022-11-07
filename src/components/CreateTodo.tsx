import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import { RiSave3Fill } from 'react-icons/ri'

interface TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  addTodo: (todo: TodoInterface) => void
  editTodo?: (id: number, title: string) => void
  changeEdit?: () => void
  title?: string
  id?: number
}

const CreateTodo: React.FC<Props> = ({
  addTodo,
  editTodo,
  title,
  id,
  changeEdit,
}) => {
  const [todo, setTodo] = useState({
    title: title ? title : '',
    completed: false,
  })

  const iconsStyle =
    'text-BrightBlue text-3xl cursor-pointer hover:text-VeryDarkGrayishBlue duration-500'

  function handlerSubmint(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (id && title && !!changeEdit && !!editTodo) {
      changeEdit()
      editTodo(id, todo.title)
    } else {
      let newTodo = {
        userId: 1,
        id: Date.now(),
        ...todo,
      }
      addTodo(newTodo)
      setTodo({
        title: '',
        completed: false,
      })
    }
  }
  return (
    <form
      className="my-2 min-w-[60%] p-5 inline-flex gap-5 items-center rounded-lg shadow-md shadow-DarkBlue
   text-VeryDarkGrayishBlue bg-VeryLightGray hover:bg-LightGrayishBlue hover:scale-105 duration-500"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlerSubmint(e)}
    >
      {todo.completed ? (
        <AiFillCheckCircle
          className={iconsStyle}
          onClick={() => setTodo({ ...todo, completed: !todo.completed })}
        />
      ) : (
        <BsCircle
          className={iconsStyle}
          onClick={() => setTodo({ ...todo, completed: !todo.completed })}
        />
      )}

      <input
        className=" flex-1 px-2 md:px-8 text-sm md:text-lg bg-transparent"
        placeholder="Write your todo here"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button>
        <RiSave3Fill className={iconsStyle} />
      </button>
    </form>
  )
}

export default CreateTodo
