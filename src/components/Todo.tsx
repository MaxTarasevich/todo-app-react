import React from 'react'
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

interface Props {
  userId: number
  id: number
  title: string
  completed: boolean
  completeTodo: (id: number) => void
  deleteTodo:(id: number) => void
}

const Todo: React.FC<Props> = ({
  userId,
  id,
  title,
  completed,
  completeTodo,
  deleteTodo
}) => {
  const iconsStyle =
    'text-BrightBlue text-3xl  cursor-pointer hover:text-VeryDarkGrayishBlue duration-500'
  return (
    <div
      className="my-2 min-w-[60%] p-5 inline-flex gap-5 items-center rounded-lg shadow-md shadow-DarkBlue
     text-VeryDarkGrayishBlue bg-VeryLightGray hover:bg-LightGrayishBlue hover:scale-105 duration-500"
    >
      {completed ? (
        <AiFillCheckCircle
          className={iconsStyle}
          onClick={() => completeTodo(id)}
        />
      ) : (
        <BsCircle className={iconsStyle} onClick={() => completeTodo(id)} />
      )}

      <span className="flex-1 px-2 md:px-8 text-sm md:text-lg">{title}</span>
      <AiFillEdit className={iconsStyle} />
      <AiFillDelete className={iconsStyle} onClick={()=>deleteTodo(id)}/>
    </div>
  )
}

export default Todo
