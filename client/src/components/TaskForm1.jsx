import React from "react";
import { Form, Formik } from "formik";
import { createStudent } from "../api/estudiantes.api";

export default function TaskForm(elementos) {
  const handleSubmit = async (v) => {
    try {
      const response = await createStudent(v);
      console.log(response);
    } catch (e) {
      console.log("errorsote: " + e.message);
    }
  };

  return (
    <Formik
      initialValues={{
        carné: "",
        sede: "",
        nombre: "",
        carrera: "",
        contraseña: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="w-[90%] m-auto block ">
          <div className="mb-5">
            <label className="font-bold">Carné: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="text"
              name="carné"
              placeholder="200012369"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold">Sede: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="text"
              name="sede"
              placeholder="Centro Universitario del Norte"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold">Nombre: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="text"
              name="nombre"
              placeholder="Juan Peréz"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold">Carrera: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="text"
              name="carrera"
              placeholder="Medicina"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold">Contraseña: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="password"
              name="contraseña"
              onChange={handleChange}
            />
          </div>

          <button
            type="Submit"
            className="mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg "
          >
            Guardar
          </button>
        </Form>
      )}
    </Formik>
  );
}
