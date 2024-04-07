import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import CambiarContraseña from './pages/CambiarContraseña'
import Login from './pages/Login'
import Documento from "./pages/Documento"

function App() {
  return (
    
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/documento"  element={<Documento />} />
      <Route path="/usuarios"  element={<Usuarios />} />
      <Route path="/cambiarContraseña"  element={<CambiarContraseña />} />
      <Route path="/login"  element={<Login />} />
    </Routes>
    
  )
}

export default App
