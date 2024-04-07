import '../style.css'
import FormatButton from '../components/FormatButton'
import {useState} from 'react'

function Documento() {
    const [format, setFormat] = useState('');
    return (
        <main className='w-[90vw] flex flex-col m-auto mt-4'>
            <section className='w-full flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <FormatButton setFormat={setFormat} typeFormat='title'>T</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title2'>T2</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title3'>T3</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title4'>T4</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='paragraph'>P</FormatButton>
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

export default Documento
