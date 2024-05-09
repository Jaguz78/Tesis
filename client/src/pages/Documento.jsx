import '../style.css'
import FormatButton from '../components/FormatButton'

import Section from '../components/Section'
import {useState, useEffect} from 'react'
import {getSections, createSection} from '../api/documento.api'

function Documento() {
    const [format, setFormat] = useState('');
    const [data, setData] = useState('')
    const [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
            .then(data => setSections(data.data))
            .catch(e => console.log(e))
    }, [])
    

    const validateData = _ => {
        let error = null
        if (format === 'title' || format === 'title2' || format === 'title3' || format === 'title4') {
            if (data.length >= 48)  error = "Los titulos o subtitulos no deben exceder de 48 carácteres"
        }

        if (format === '') error = "Debe seleccionar un formato"
        console.log(error)
        return error
    }

    const agregar = async _ => {
        try {
            let error = validateData()
            if (error==null) {
                let section = {
                    valor: data,
                    posicion: sections.length, 
                }
                switch (format){
                    case 'title':
                        section.id_formato = 1
                        break
                    case 'title2':
                        section.id_formato = 2
                        break
                    case 'title3':
                        section.id_formato = 3
                        break
                    case 'title4':
                        section.id_formato = 4
                        break
                    case 'paragraph':
                        section.id_formato = 5
                        break
                    default:
                        section.id_formato = 5
                }
                const response = await createSection(section)
                if (response.status === 200){
                    setSections([...sections, response.data ])
                }
            }else{
                alert("Error: "+ error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className='w-[90vw] flex flex-col m-auto mt-4'>
            <section className='w-full flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <FormatButton setFormat={setFormat} typeFormat='title' activeButton={format}>C</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title' activeButton={format}>T</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title2' activeButton={format}>T2</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title3' activeButton={format}>T3</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='title4' activeButton={format}>T4</FormatButton>
                    <FormatButton setFormat={setFormat} typeFormat='paragraph' activeButton={format}>P</FormatButton>
                </div>
                <div>
                    <button className='p-3 bg-my-green text-white rounded-lg' onClick={_ => console.log(sections)}>Imprimir PDF</button>
                </div>
            </section>
            <section className='mt-4 w-full h-[70vh] flex flex-row justify-between'>
                <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl'>
                    <textarea onChange={(e) => setData(e.target.value)} name="inputTextarea" id="inputTextarea" className='w-full h-[90%] rounded-lg p-2 border-0 focus:outline-none' placeholder='Escribe aquí...'></textarea>
                    <button onClick={agregar} className='w-24 p-3 bg-my-green text-white rounded-lg mt-4 self-end'>Agregar</button>
                </div>

                <div className='w-[48%] h-full border-2 border-gray-600 rounded-2xl p-4 flex flex-col shadow-xl overflow-y-scroll'>
                    {
                        sections.map(s => <Section format={s.id_formato} key={s.id_seccion} id={s.id_seccion} sections={sections} setSections={setSections}>{s.valor}</Section>)
                    }
                </div>
            </section>
        </main>
    )
}

export default Documento
