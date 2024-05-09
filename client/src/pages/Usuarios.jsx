import H2 from "../components/H2"
import Tabla from "../components/Tabla"
import StudentForm from "../components/StundentForm"
import JDirectivaForm from "../components/JDirectivaForm"

export default function Usuarios() {
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
    <>

    <div className="mb-20 mt-10" >
      <H2 name={'Estudiantes'} />
      <div className="flex justify-between ">
        <div className=' mx-auto w-[30%] border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <StudentForm></StudentForm>
        </div>
        <div className=" mx-auto w-[60%]">
          <Tabla headers={headers} data={data}></Tabla>
        </div>
      </div>
    </div>
    
    <div className="mb-20 mt-10" >
      <H2 name={'Junta Directiva'} />
      <div className="flex justify-between ">
        <div className=' mx-auto w-[30%] border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <JDirectivaForm></JDirectivaForm>
        </div>
        <div className=" mx-auto w-[60%]">
        </div>
      </div>
    </div>
    </>
  )
}
