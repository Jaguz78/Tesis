import H2 from "../components/H2"
import Tabla from "../components/Tabla"
import StudentForm from "../components/StundentForm"
import JDirectivaForm from "../components/JDirectivaForm"
import Junta from "../components/Junta"

export default function Usuarios() {
  const headers = [
    {
      name:'ID Usuario',
      selector: row=>row.id_usuario,
      sortable: true
    },
    {
      name:'Sede',
      selector: row=>row.sede,
      sortable: true
    },
    {
      name:'Nombre',
      selector: row=>row.nombre,
      sortable: true
    },
    
    {
      name:'Carrera',
      selector: row=>row.carrera,
      sortable: true
    }
  ]

  const data =[
    {
      id_usuario:1,
      sede: 'Juan Perez',
      nombre:'Software',
      carrera: '2020',
    },
    {
      id_usuario:2,
      sede: 'Sofia Gómez',
      nombre:'Construcción',
      carrera: '2018',
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
        <div className=" mx-auto w-[60%] ">
          <Junta></Junta>
        </div>
      </div>
    </div>
    </>
  )
}
