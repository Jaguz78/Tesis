import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavElement from "./NavElement";

export default function Navbar() {
  const [rol, setRol] = useState("");

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("usuario"));
    user ? setRol(user.rol) : "";
  }, []);
  return (
    <div className="nav bg-zinc-900 py-5 flex text-gray-400 place-content-between font-bold text-lg shadow-xl">
      {rol === "administrador" && (
        <>
          <ul className="flex mx-5 space-x-7 ">
            <NavElement nombre={"Home"} ruta={"./"} />
            <NavElement nombre={"Documento"} ruta={"/documento"} />

            <NavElement nombre={"Usuarios"} ruta={"/usuarios"} />
          </ul>
          <ul className="flex mx-5 space-x-7">
            <NavElement
              clase="text-sm py-1.5"
              nombre={"Cambiar Contraseña"}
              ruta={"/cambiarContraseña"}
            />
            <li>
              <button
                className="px-2 py-1 bg-sky-500/75 text-white rounded-lg"
                onClick={() => {
                  window.localStorage.removeItem("usuario");
                  window.location.reload();
                }}
              >
                <NavLink to="/login">Logout</NavLink>
              </button>
            </li>
          </ul>
        </>
      )}
      {rol === "" && (
        <>
          <ul className="flex mx-5 space-x-7 ">
            <NavElement nombre={"Home"} ruta={"./"} />
          </ul>
          <ul className="flex mx-5 space-x-7">
            <li>
              <button className="px-2 py-1 bg-sky-500/75 text-white rounded-lg">
                <NavLink to="/login">Login</NavLink>
              </button>
            </li>
          </ul>
        </>
      )}
      {rol === "estudiante" && (
        <>
          <ul className="flex mx-5 space-x-7 ">
            <NavElement nombre={"Home"} ruta={"./"} />
            <NavElement nombre={"Documento"} ruta={"/documento"} />
          </ul>
          <ul className="flex mx-5 space-x-7">
            <NavElement
              clase="text-sm py-1.5"
              nombre={"Cambiar Contraseña"}
              ruta={"/cambiarContraseña"}
            />
            <li>
              <button
                className="px-2 py-1 bg-sky-500/75 text-white rounded-lg"
                onClick={() => {
                  window.localStorage.removeItem("usuario");
                  window.location.reload();
                }}
              >
                <NavLink to="/login">Logout</NavLink>
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
