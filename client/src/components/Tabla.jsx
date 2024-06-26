import React from 'react'
import DataTable from 'react-data-table-component'


export default function Tabla({headers, data }) {
  return (
        <div className='w-[100%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>        
        <DataTable 
            columns={headers}
            data={data}
            fixedHeader
        />
        </div>
  )
}
