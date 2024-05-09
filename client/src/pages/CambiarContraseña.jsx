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
      <ChangePassForm></ChangePassForm>
    </div>
  );
}
