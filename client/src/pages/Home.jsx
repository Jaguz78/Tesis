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
    }
  ]


  return (
    <div className='block'>  
      <div className='mt-10 m-auto flex w-[90%] justify-between'>
        <input 
        className='w-[80%] border-2 border-gray-600 rounded-2xl p-2  shadow-xl ' placeholder='Buscar...' />
        
        <button className='end-0 w-[15%] p-2 bg-my-green text-white rounded-lg '>Publicar Tesis</button>      
      </div>
      
      <Tabla headers={headers} data={data}/>
    </div>
    
  )
}

