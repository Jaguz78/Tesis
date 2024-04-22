import H2 from "../components/H2"
import InputField from "../components/InputField"
import Tabla from "../components/Tabla"

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
    <div className="mt-10 mb-20">
      <H2 name={'Asesores'} />
      <div className="flex justify-between ">
        <div className=' mx-auto w-[30%] border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <form className='w-[90%] m-auto block '>
          <InputField id={'id'} type={'number'} name={'ID'} placeholder={'Ingrese el ID...'} margin={'mb-5'}/>
          <InputField id={'nombre'} type={'text'} name={'Nombre'} placeholder={'Ingrese el nombre...'} margin={'mb-5'}/>
          <InputField id={'contraseña'} type={'password'} name={'Contraseña'} placeholder={'Ingrese su contraseña...'} margin={'mb-5'}/>
          <button 
          className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Crear Asesor</button> 
        </form>
        </div>
        <div className=" mx-auto w-[60%]">
          <Tabla headers={headers} data={data}></Tabla>
        </div>
      </div>
    </div>

    <div className="mb-20" >
      <H2 name={'Estudiantes'} />
      <div className="flex justify-between ">
        <div className=' mx-auto w-[30%] border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <form className='w-[90%] m-auto block '>
          <InputField id={'carné'} type={'number'} name={'Carné'} placeholder={'Ingrese el carné...'} margin={'mb-5'}/>
          <InputField id={'sede'} type={'text'} name={'Sede'} placeholder={'Ingrese la sede...'} margin={'mb-5'}/>
          <InputField id={'nombre'} type={'text'} name={'Nombre'} placeholder={'Ingrese el nombre...'} margin={'mb-5'}/>
          <InputField id={'carrera'} type={'text'} name={'Carrera'} placeholder={'Ingrese la carrera...'} margin={'mb-5'}/>
          <InputField id={'contraseña'} type={'password'} name={'Contraseña'} placeholder={'Ingrese su contraseña...'} margin={'mb-5'}/>
          <button 
          className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Crear Estudiante</button> 
        </form>
        </div>
        <div className=" mx-auto w-[60%]">
          <Tabla headers={headers} data={data}></Tabla>
        </div>
      </div>
    </div>

    <div className="mb-20" >
      <H2 name={'Asignación de Asesores'} />
      <div className="flex justify-between ">
        <div className=' mx-auto w-[30%] border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <form className='w-[90%] m-auto block '>
          <InputField id={'id'} type={'number'} name={'ID'} placeholder={'Ingrese el ID...'} margin={'mb-5'}/>

          <InputField id={'tesis'} type={'number'} name={'Tesis'} placeholder={'Ingrese la tesis...'} margin={'mb-5'}/>

          <button 
          className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Asignar</button> 
        </form>
        </div>
        <div className=" mx-auto w-[60%]">
          <Tabla headers={headers} data={data}></Tabla>
        </div>
      </div>
    </div>    
    
    </>
  )
}
