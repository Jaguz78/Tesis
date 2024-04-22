import React from 'react'

export default function Seccion({data, formato}) {
  return (
    <div className="w-96 p-4 border-2 rounded-xl my-1">
        <span className={formato}>{data}</span>
    </div>
  )
}


