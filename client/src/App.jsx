import {Route, Routes} from "react-router-dom"
import Home from './pages/home'
import Documento from './pages/documento'
import Usuarios from './pages/usuarios'
import CambiarContraseña from './pages/cambiarContraseña'
import Login from './pages/login'

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
