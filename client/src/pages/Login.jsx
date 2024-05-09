import React from "react";
import { Formik, Form } from "formik";
import { login } from "../api/login.api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const res = await login(values);
      const user = {
        id_usuario: values.carne,
        contraseña: values.contraseña,
        rol: res.data.rol,
        token: res.data.token,
      };
      window.localStorage.setItem("usuario", JSON.stringify(user));
      navigate("/");
      window.location.reload();
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <Formik
      initialValues={{ carne: "", contraseña: "" }}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
    >
      {({ handleChange, isSubmitting }) => (
        <Form className="mt-10 mb-10 w-[30%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl block m-auto ">
          <div className="mb-5">
            <label className="font-bold">Carné: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="text"
              name="carne"
              placeholder="200012369"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold">Contraseña: </label>
            <input
              className="w-[100%] block h-full border-2 border-gray-600 rounded-xl p-2 "
              type="password"
              name="contraseña"
              placeholder="************"
              onChange={handleChange}
            />
          </div>

          <button
            type="Submit"
            disabled={isSubmitting}
            className="mb-10 mt-10 w-[100%] p-2 bg-my-green text-white rounded-lg "
          >
            Iniciar Sesión
          </button>
        </Form>
      )}
    </Formik>
  );
}
