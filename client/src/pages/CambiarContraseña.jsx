<<<<<<< HEAD
import React from "react";
import InputField from "../components/InputField";
import { Form, Formik } from "formik";
import ChangePassForm from "../components/ChangePassForm";

export default function CambiarContraseña() {
  const handleClic = async (e) => {
    e.preventDefault();
    const res = await changePassword();
    console.log(res);
  };

  return (
    <div className="my-7 m-auto w-[30%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl flex">
=======
import React from 'react'
import ChangePassForm from '../components/ChangePassForm'

export default function CambiarContraseña() {

  return (
    <div className='my-7 m-auto w-[30%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl flex' >
>>>>>>> 8546f3f7536e9dd3d41ee2213dcc6e29691db9a9
      <ChangePassForm></ChangePassForm>
    </div>
  );
}
