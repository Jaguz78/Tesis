import React from 'react'
import { Form, Formik } from 'formik'

export default function ChangePassForm() {
  return (
      <Formik 
            initialValues={{
                carné: "",
                cActual:"",
                cNueva:"",
                nuevaRepetida:""
            }} 
            onSubmit={(values)=>{
                console.log(values)
            }}
        >
            {({handleChange, handleSubmit}) =>(
                <Form onSubmit={handleSubmit} className='w-[90%] m-auto block '> 
                    <div className='mb-5'>
                        <label className='font-bold'>Carné: </label>
                        <input  
                        className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                        type='text'
                        name='carné'
                        placeholder='200012369'
                        onChange={handleChange}
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='font-bold'>Contraseña Actual: </label>
                        <input  
                        className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                        type='password'
                        name='cActual'
                        placeholder='...'
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div className='mb-5'>
                        <label className='font-bold'>Contraseña Nueva: </label>
                        <input  
                        className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                        type='password'
                        name='cNueva'
                        placeholder='...'
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div className='mb-5'>
                        <label className='font-bold'>Repita su Contraseña: </label>
                        <input  
                        className='w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 '                        
                        type='password'
                        name='nuevaRepetida'
                        placeholder='...'
                        onChange={handleChange}
                        />
                    </div>

                    <button type="Submit" className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Guardar</button>
                </Form>
            )}
        </Formik>
  )
}
