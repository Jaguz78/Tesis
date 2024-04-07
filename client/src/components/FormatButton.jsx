import '../style.css'
import React from 'react'

export default function FormatButton({children, typeFormat, setFormat, activeButton}) {

  const handleClick = e => {
    setFormat(typeFormat)
  }

  return (
    <button onClick={handleClick} className={`w-14 h-14 bg-transparent border-2 shadow-inner border-slate-800 rounded-lg font-bold mr-4 ${activeButton == typeFormat ? 'bg-zinc-400': 'bg-transparent'}`}>
      {children}
      </button>
  )
}

export { FormatButton }