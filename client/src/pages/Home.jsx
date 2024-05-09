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
    let newData= [], newData2 =[], arr, num, num2
    let i = event.target.value.toLowerCase()
    i=i.split(",")
    if(i.length==1){
    newData = data.filter(row =>{
    let estudiante = row.estudiante.toLowerCase().includes(i)
    let titulo = row.titulo.toLowerCase().includes(i)
    let año = row.año.toLowerCase().includes(i)
    let estado = row.estado.toLowerCase().includes(i)
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
  }else if(i.length>1){
      newData = data.filter(row =>{
      let estudiante = row.estudiante.toLowerCase().includes(i[0].trim())
      let titulo = row.titulo.toLowerCase().includes(i[0].trim())
      let año = row.año.toLowerCase().includes(i[0].trim())
      let estado = row.estado.toLowerCase().includes(i[0].trim())
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
      newData2 = data.filter(row =>{
      let estudiante = row.estudiante.toLowerCase().includes(i[1].trim())
      let titulo = row.titulo.toLowerCase().includes(i[1].trim())
      let año = row.año.toLowerCase().includes(i[1].trim())
      let estado = row.estado.toLowerCase().includes(i[1].trim())

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

    arr = newData.concat(newData2)
    let interseccion =  (array) => {
      let duplicate_elements = []
      for (num in arr) {
          for (num2 in arr) {
              if (num === num2) {
                  continue;
              }
              else {
                  if (arr[num] === arr[num2]) {
                      duplicate_elements.push(arr[num]);
                  }
              }
          }
      }
      return [...new Set(duplicate_elements)];
  }
  newData=interseccion(arr)
  console.log(newData)
    }
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

