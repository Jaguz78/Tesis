import '../style.css'
import FormatButton from '../components/FormatButton'
import {useState} from 'react'

function Documento() {
    const [format, setFormat] = useState('');
    const [data, setData] = useState('')

    const validateData = _ => {
        let response = {
            data: data.trim(),
        }
        if (format === 'title' || format === 'title2' || format === 'title3' || format === 'title4') {
            if (data.length >= 48)  response.error = "Muy largo"
        }

        if (format === 'title2' || format === 'title3' || format === 'title4') {
            response.data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
        }

        if (format === 'paragraph'){
            const parrafos = data.split('\n');
            const parrafosCapitalizados = parrafos.map(parrafo => {
                // Si el párrafo está vacío, regresamos una cadena vacía
                if (!parrafo.trim()) return "";
            
                    if (data.length <= 350) response.error = "Demasiado corto"
                    if (data.length >= 850) response.error = "Demasiado largo"

                // Capitalizamos la primera letra del párrafo y la unimos con el resto de la cadena en minúsculas
                return parrafo.charAt(0).toUpperCase() + parrafo.slice(1).toLowerCase();
              });
              response.data = parrafosCapitalizados
        }

        if (format === '') response.error = "Debe seleccionar un formato"
        console.log(response)
        return response
    }

    return (
        <main className='w-[90vw] flex flex-col m-auto mt-4'>
            <section className='w-full flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <FormatButton setFormat={setFormat} typeFormat='title' activeButton={format}>T</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title2' activeButton={format}>T2</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title3' activeButton={format}>T3</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title4' activeButton={format}>T4</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='paragraph' activeButton={format}>P</FormatButton>
                </div>
                <div>
                    <button className='p-3 bg-my-green text-white rounded-lg'>Imprimir PDF</button>
                </div>
            </section>
            <section className='mt-4 w-full h-[70vh] flex flex-row justify-between'>
                <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl'>
                    <textarea onChange={(e) => setData(e.target.value)} name="inputTextarea" id="inputTextarea" className='w-full h-[90%] rounded-lg p-2 border-0 focus:outline-none' placeholder='Escribe aquí...'></textarea>
                    <button onClick={validateData} className='w-24 p-3 bg-my-green text-white rounded-lg mt-4 self-end'>Agregar</button>
                </div>
                <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl'>

                </div>
            </section>
        </main>
    )
}

export default Documento
