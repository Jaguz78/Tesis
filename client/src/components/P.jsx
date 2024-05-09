import React from 'react'

export default function P({name,align}) {
  return (
    <div className={align}>
      <h2 className="text-l block mb-3">{name}</h2>
    </div>
  )
}
