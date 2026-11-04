import { useState } from "react"


export const ProgressBox = ({count, type}) => {
  return (
    <div className={`progress_box rounded-lg p-2 w-1/2 m-1 flex flex-col ${type == "total" ? "bg-blue-400" : "bg-green-500"}`}>
        <span className="progress_icon">c</span>
        <span className="text-3xl font-bold">{count}</span>
        <span>{type == 'total' ? 'total Tasks' : 'Completed'}</span>
    </div>
  )
}