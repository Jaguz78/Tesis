import React from 'react'
import InputField from '../components/InputField'
<<<<<<< HEAD
import {changePassword} from '../api/login.api'
=======
import { Form, Formik } from 'formik'
import ChangePassForm from '../components/ChangePassForm'
>>>>>>> 791b3486aa30b017c2f858d8374024ca2b6a67d3

export default function CambiarContraseña() {

  const handleClic = async (e) => {
    e.preventDefault()
    const res = await changePassword()
    console.log(res)
  }

  return (
    <div className='my-7 m-auto w-[30%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl flex' >
<<<<<<< HEAD

      <form className='w-[90%] m-auto block '>

        <InputField id={'carné'} type={'number'} name={'Carné'} placeholder={'Ingrese su carné...'} margin={'mb-5'}/>

        <InputField id={'contraseñaActual'} type={'password'} name={'Contraseña Actual'} placeholder={'Ingrese su contarseña actual...'} margin={'mb-5'}/>

        <InputField id={'contraseñaNueva'} type={'password'} name={'Contraseña Nueva'} placeholder={'Ingrese su nueva contraseña...'} margin={'mb-5'}/>

        <InputField id={'contraseñaNuevaRep'} type={'password'} name={'Repita su Contraseña'} placeholder={'Repita su contraseña...'} margin={'mb-5'}/>
        
        <button onClick={handleClic}
        className='my-3 w-[100%] p-2 bg-my-green text-white rounded-lg '>Cambiar Contraseña</button> 
      </form>
      
=======
      <ChangePassForm></ChangePassForm>
>>>>>>> 791b3486aa30b017c2f858d8374024ca2b6a67d3
    </div>
  )
}
