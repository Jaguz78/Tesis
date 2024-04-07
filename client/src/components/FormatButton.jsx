import '../style.css'
import React from 'react'

export default function FormatButton({children, typeFormat, setFormat}) {

const handleClic = e => setFormat(typeFormat)

  return (
    <button onClick={handleClic} className='w-14 h-14 bg-transparent border-2 shadow-inner border-slate-800 rounded-lg font-bold mr-4 focus:bg-slate-400'>{children}</button>
  )
}

export { FormatButton }