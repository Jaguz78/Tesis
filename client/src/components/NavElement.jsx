import { NavLink } from "react-router-dom"
import React from "react"

export default function NavElement({nombre, ruta,clase}) {
    return(
    <li className={clase}>
        <NavLink to={ruta} style={({ isActive }) => {return isActive ? { color: "white" } : {};}}>{nombre}</NavLink>
    </li>
    )
  }

