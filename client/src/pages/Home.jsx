import { useState } from 'react'
import Tabla from '../components/Tabla'
import '../style.css'
export default function Home() {

  const headers = [
    {
      name:'Fecha',
      selector: row=>row.fecha,
      sortable: true
    },
    {
      name:'Título',
      selector: row=>row.titulo,
      sortable: true
    },    
    {
      name:'Sede',
      selector: row=>row.sede,
      sortable: true
    },    
    {
      name:'Carrera',
      selector: row=>row.carrera,
      sortable: true
    },    
    {
      name:'Nombre',
      selector: row=>row.nombre,
      sortable: true
    },  
    {
      name: "PDF",
      cell: (row) => (
        <button
          className="text-blue-500"
          onClick={() => {
            //navigate("/facturas/detalle", { state: { data: row.id } });
          }}
        >
          Generar PDF
        </button>
      ),
    }
  ]

  const data =[
    {
      id_tesis:1,
      nombre: 'Juan Perez',
      titulo:'Software',
      sede:'CUNOC',
      carrera:'Sistemas',
      fecha:'2021',
      fecha_creacion:'Abril'
    },
    {
      id_tesis:2,
      nombre: 'Sofia Gómez',
      titulo:'Construcción',
      sede:'CUNOR',
      carrera:'Civil',
      fecha:'2018',
      fecha_creacion:'Mayo'
    },
    {
      id_tesis:3,
      nombre: 'Jose Perez',
      titulo:'Software',
      sede:'CUNOR',
      carrera:'Sistemas',
      fecha:'2021',
      fecha_creacion:'Enero'
    },
    {
      id_tesis:4,
      nombre: 'Ana Gómez',
      titulo:'Construcción',
      sede:'CENTRAL',
      carrera:'Medicina',
      fecha:'2020',
      fecha_creacion:'Enero'
    }

  ]

  const [records, setRecords] = useState(data)

  function handleFilter(event){
    let newData= [], newData2 =[], arr, num, num2
    let i = event.target.value.toLowerCase()
    i=i.split(",")
    if(i.length==1){
    newData = data.filter(row =>{
    let nombre = row.nombre.toLowerCase().includes(i[0])
    let titulo = row.titulo.toLowerCase().includes(i[0])
    let sede = row.sede.toLowerCase().includes(i[0])
    let carrera = row.carrera.toLowerCase().includes(i[0])
    let fecha = row.fecha.toLowerCase().includes(i[0])
    let fecha_creacion = row.fecha_creacion.toLowerCase().includes(i[0])
    
    if(nombre){
      return nombre
    }else if(titulo){
      return titulo
    }else if(sede){
      return sede
    }else if(fecha){
      return fecha
    }else if(fecha_creacion){
      return fecha_creacion
    }else{
      return carrera
    }       
    })
  }else if(i.length>1){
    console.log(i)
      newData = data.filter(row =>{
      let nombre = row.nombre.toLowerCase().includes(i[0].trim())
      let titulo = row.titulo.toLowerCase().includes(i[0].trim())
      let sede = row.sede.toLowerCase().includes(i[0].trim())
      let carrera = row.carrera.toLowerCase().includes(i[0].trim())
      let fecha = row.fecha.toLowerCase().includes(i[0].trim())
      let fecha_creacion = row.fecha_creacion.toLowerCase().includes(i[0])
      if(nombre){
        return nombre
      }else if(titulo){
        return titulo
      }else if(sede){
        return sede
      }else if(fecha){
        return fecha
      }else if(fecha_creacion){
        return fecha_creacion
      }else{
        return carrera
      }       
      })
      newData2 = data.filter(row =>{
      let nombre = row.nombre.toLowerCase().includes(i[1].trim())
      let titulo = row.titulo.toLowerCase().includes(i[1].trim())
      let sede = row.sede.toLowerCase().includes(i[1].trim())
      let carrera = row.carrera.toLowerCase().includes(i[1].trim())
      let fecha = row.fecha.toLowerCase().includes(i[1].trim())
      let fecha_creacion = row.fecha_creacion.toLowerCase().includes(i[1])

      if(nombre){
        return nombre
      }else if(titulo){
        return titulo
      }else if(sede){
        return sede
      }else if(fecha){
        return fecha
      }else if(fecha_creacion){
        return fecha_creacion
      }else{
        return carrera
      }       
    })  

    arr = newData.concat(newData2)
    let interseccion =  (array) => {
      let duplicate_elements = []
      for (num in array) {
          for (num2 in array) {
              if (num === num2) {
                  continue;
              }
              else {
                  if (array[num] === array[num2]) {
                      duplicate_elements.push(array[num]);
                  }
              }
          }
      }
      return [...new Set(duplicate_elements)];
  }
  newData=interseccion(arr)
    }
    //console.log(newData)
    setRecords(newData)
  }
  

  return (
    <div className='block'>  
      <div className='mt-10 m-auto flex w-[90%] justify-between'>     
        <input 
        className='w-[100%] border-2 border-gray-600 rounded-2xl p-2  shadow-sm ' placeholder='Buscar...' 
        onChange={handleFilter}/>     
      </div>
      <div className='mt-10 mx-auto w-[90%]'>        
        <Tabla headers={headers} data={records}/>
      </div>
    </div>
    
  )
}

