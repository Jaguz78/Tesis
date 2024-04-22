import React from 'react'

export default function InputField({id, type, name, placeholder, margin}) {
  return (
    <div className={margin} >
          <label className='font-bold' htmlFor={id}>{name}:</label>
          <input 
            className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 shadow-xl' 
            id={id} 
            type={type}
            placeholder={placeholder}/>          
        </div>
  )
}
