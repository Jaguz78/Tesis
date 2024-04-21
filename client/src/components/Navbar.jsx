import { NavLink } from "react-router-dom"
import React from "react"
import NavElement from "./NavElement";

export default function Navbar() {
  return (
    <div className="nav bg-zinc-900 py-5 flex text-gray-400 place-content-between font-bold text-lg">
      <ul className="flex mx-5 space-x-7 ">       
        <NavElement nombre={'Home'} ruta={'./'}/>
        <NavElement nombre={'Documento'} ruta={'/documento'} />
        <NavElement nombre={'Usuarios'} ruta={'/usuarios'} />
      </ul>
      <ul className="flex mx-5 space-x-7">
        <NavElement clase="text-sm py-1.5" nombre={'Cambiar Contraseña' } ruta={'/cambiarContraseña'}/>
        <li>
          <button className="px-2 py-1 bg-sky-500/75 text-white rounded-lg">
          <NavLink to='/login'>Log in</NavLink>
          </button>
        </li>
      </ul>
    </div>
  )
}
