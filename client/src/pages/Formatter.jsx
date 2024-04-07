import React from 'react'
import '../style.css'
import FormatButton from '../components/FormatButton'

function Formatter() {
  return (
    <main className='w-[90vw]  flex flex-col m-auto mt-4'>
        <section className='w-full flex flex-row justify-between'>
            <div className='flex flex-row'>
                <FormatButton>T</FormatButton>
                <FormatButton>T2</FormatButton>
                <FormatButton>S</FormatButton>
                <FormatButton>P</FormatButton>
            </div>
            <div>
                <button className='p-3 bg-my-green text-white rounded-lg'>Imprimir PDF</button>
            </div>
        </section>
        <section className='mt-4 w-full h-[75vh] flex flex-row justify-between'>
            <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl'>
                <textarea name="inputTextarea" id="inputTextarea" className='w-full h-[90%] rounded-lg p-2 border-0 focus:outline-none' placeholder='Escribe aquí...'></textarea>
                <button className='w-24 p-3 bg-my-green text-white rounded-lg mt-4 self-end'>Agregar</button>
            </div>
            <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl'>

            </div>
        </section>
    </main>
  )
}

export default Formatter