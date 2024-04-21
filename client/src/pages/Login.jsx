import React from 'react'
import InputField from '../components/InputField'

export default function Login() {
  return (
    <div className='mt-10 mb-10 m-auto w-[30%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl flex' >
      <form className='w-[90%] m-auto block '>
        <InputField id={'carné'} type={'number'} name={'Carné'} placeholder={'Ingrese su carné...'} margin={'my-10'}/>
        <InputField id={'contraseña'} type={'password'} name={'Contraseña'} placeholder={'Ingrese su contraseña...'} margin={'my-10'}/>
        
        <button 
        className='mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg '>Iniciar Sesión</button> 
      </form>
      
    </div>
  )
}
