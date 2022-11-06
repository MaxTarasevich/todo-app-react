import React from 'react'
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

interface Props {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Todo: React.FC<Props> = ({ userId, id, title, completed }) => {
  const iconsStyle =
    'text-BrightBlue text-3xl  cursor-pointer hover:text-VeryDarkGrayishBlue duration-500'
  return (
    <div
      className="my-2 min-w-[60%] p-5 inline-flex gap-5 items-center rounded-lg shadow-md shadow-DarkBlue
     text-VeryDarkGrayishBlue bg-VeryLightGray hover:bg-LightGrayishBlue hover:scale-105 duration-500"
    >
      {completed ? (
        <AiFillCheckCircle className={iconsStyle} />
      ) : (
        <BsCircle className={iconsStyle} />
      )}

      <span className="mr-auto px-2 md:px-8 text-sm md:text-lg">{title}</span>
      <AiFillEdit className={iconsStyle} />
      <AiFillDelete className={iconsStyle} />
    </div>
  )
}

export default Todo
