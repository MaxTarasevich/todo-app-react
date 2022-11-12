import React from 'react'

interface Props{
    items: number | undefined
}

const InfoPanel: React.FC<Props> = ({items}) => {
  return (
    <div
      className=" mb-4 min-w-[60%] max-w-full p-5 inline-flex gap-5 items-center rounded-t-lg 
      shadow-md shadow-DarkBlue text-sm font-bold text-GrayishBlue bg-VeryLightGray"
    >
      <span className="mr-auto info-panel-item pointer-events-none">{items} items left</span>
      <span className="info-panel-item">All</span>
      <span className="info-panel-item">Active</span>
      <span className="info-panel-item">Completed</span>
      <span className="info-panel-item">Clear Completed</span>
    </div>
  )
}

export default InfoPanel
