import { useState } from 'react'
import Tabla from '../components/Tabla'
import '../style.css'
export default function Home() {

  const headers = [
    {
      name:'Estudiante',
      selector: row=>row.estudiante,
      sortable: true
    },
    {
      name:'Titulo',
      selector: row=>row.titulo,
      sortable: true
    },
    {
      name:'Año',
      selector: row=>row.año,
      sortable: true
    },
    
    {
      name:'Estado',
      selector: row=>row.estado,
      sortable: true
    }
  ]

  const data =[
    {
      id:1,
      estudiante: 'Juan Perez',
      titulo:'Software',
      año: '2020',
      estado:'En revisión'
    },
    {
      id:2,
      estudiante: 'Sofia Gómez',
      titulo:'Construcción',
      año: '2018',
      estado:'Finalizada'
    },
    {
      id:3,
      estudiante: 'Juan Perez',
      titulo:'Software',
      año: '2020',
      estado:'Finalizada'
    },
    {
      id:4,
      estudiante: 'Sofia Gómez',
      titulo:'Construcción',
      año: '2018',
      estado:'Finalizada'
    }
  ]

  const [records, setRecords] = useState(data)

  function handleFilter(event){
    const newData = data.filter(row =>{
      let estudiante = row.estudiante.toLowerCase().includes(event.target.value.toLowerCase())
      let titulo = row.titulo.toLowerCase().includes(event.target.value.toLowerCase())
      let año = row.año.toLowerCase().includes(event.target.value.toLowerCase())
      let estado = row.estado.toLowerCase().includes(event.target.value.toLowerCase())

      if(estudiante){
        return estudiante
      }else if(titulo){
        return titulo
      }else if(año){
        return año
      }else{
        return estado
      }       
    })
    setRecords(newData)
  }

  return (
    <div className='block'>  
      <div className='mt-10 m-auto flex w-[90%] justify-between'>
        <input 
        className='w-[80%] border-2 border-gray-600 rounded-2xl p-2  shadow-sm ' placeholder='Buscar...' 
        onChange={handleFilter}/>
        
        <button className='end-0 w-[15%] p-2 bg-my-green text-white rounded-lg '>Publicar Tesis</button>      
      </div>
      <div className='mt-10 mx-auto w-[90%]'>        
        <Tabla headers={headers} data={records}/>
      </div>
    </div>
    
  )
}

