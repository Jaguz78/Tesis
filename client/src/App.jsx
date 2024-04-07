import {Route, Routes} from "react-router-dom"
import home from './pages/home'
import documento from './pages/documento'
import usuarios from './pages/usuarios'
import cambiarContraseña from './pages/cambiarContraseña'
import login from './pages/login'
import Formatter from './pages/Formatter'

function App() {
  return (
    
    <Routes>
      <Route path="/"  element={<home />} />
      <Route path="/documento"  element={<Formatter />} />
      <Route path="/usuarios"  element={<usuarios />} />
      <Route path="/cambiarContraseña"  element={<cambiarContraseña />} />
      <Route path="/login"  element={<login />} />
    </Routes>
    
  )
}

export default App
