import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="nav bg-zinc-900 py-5 flex text-gray-400 place-content-between font-bold text-lg">

      <ul className="flex mx-5 space-x-7 ">       
        <li>
          <NavLink to='/' style={({ isActive }) => {
          return isActive ? { color: "white" } : {};}}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/documento' style={({ isActive }) => {
          return isActive ? { color: "white" } : {};}} >Documento</NavLink>
        </li>
        <li>
          <NavLink to='/usuario' style={({ isActive }) => {
          return isActive ? { color: "white" } : {};}}>Usuarios</NavLink>
        </li>
      </ul>

      <ul className="flex mx-5 space-x-7">
        <li className="text-sm py-1.5">
          <NavLink to='/cambiarContraseña' style={({ isActive }) => {
          return isActive ? { color: "white" } : {};}}>Cambiar Contraseña</NavLink>
        </li>
        <li>
          <button className="px-2 py-1 bg-sky-500/75 text-white rounded-lg">
          <NavLink to='/login'>Log in</NavLink>
          </button>
        </li>
      </ul>
    </div>
  )
}
