import React from 'react'
import { Form,Field, Formik } from 'formik'
import * as Yup from 'yup';

const juntaSchema = Yup.object().shape({
    grupo: Yup.string()
      .required('Required'),
    rol: Yup.string()
      .required('Required'),
    profesion: Yup.string()
      .required('Required'),
    nombre: Yup.string()
      .required('Required'),
    fecha: Yup.string()
        .required('Required'),
  });



export default function JDirectivaForm() {
  return (<Formik 
    initialValues={{
        grupo: "",
        rol:"",
        profesion:"",
        nombre:"",
        fecha:""
    }} 
    validationSchema={juntaSchema}
    onSubmit={(values)=>{
        console.log(values)
    }}
>
    {({handleChange, handleSubmit}) =>(
        <Form onSubmit={handleSubmit} className='w-[90%] m-auto block '> 
            <div className='mb-5'>
                <label className='font-bold'>Grupo: </label>
                <div role="group" aria-labelledby="my-radio-group">
                <label className='w-[100%] block my-2'>
                    <Field type="radio" name="grupo" value="Ninguno" onChange={handleChange}/>
                    Ninguno
                </label>
                <label className='w-[100%] block my-2'>
                    <Field type="radio" name="grupo" value="Consejo Directivo" onChange={handleChange}/>
                    Consejo Directivo
                </label>
                <label className='w-[100%] block my-2'>
                    <Field type="radio" name="grupo" value="Comisión de Trabajos de Graduación" onChange={handleChange}/>
                    Comisión de Trabajos de Graduación
                </label>
                </div>
            </div>
            <div className='mb-5'>
                <label className='font-bold'>Rol: </label>
                <input  
                className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                type='text'
                name='rol'
                placeholder='Secretario'
                onChange={handleChange}
                />
            </div>
            <div className='mb-5'>
                <label className='font-bold'>Profesión: </label>
                <input  
                className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                type='text'
                name='profesion'
                placeholder='Ing. Geól.'
                onChange={handleChange}
                />
            </div>
            <div className='mb-5'>
                <label className='font-bold'>Nombre: </label>
                <input  
                className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                type='text'
                name='nombre'
                placeholder='Juan Peréz'
                onChange={handleChange}
                />
            </div>
            <div className='mb-5'>
                <label className='font-bold'>Año: </label>
                <input  
                className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                type='text'
                name='fecha'
                onChange={handleChange}
                />
            </div>

            <button type="Submit" className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Guardar</button>
        </Form>
    )}
    </Formik>
  )
}
