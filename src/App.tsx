import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import MiPrimeraCatequesis from './pages/MiPrimeraCatequesis'
import Precomunion from './pages/Precomunion'
import Comunion from './pages/Comunion'
import Preconfirmacion from './pages/Preconfirmacion'
import Confirmacion from './pages/Confirmacion'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AddLesson from './pages/AddLesson'

function App() {
  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi-primera-catequesis" element={<MiPrimeraCatequesis />} />
        <Route path="/precomunion" element={<Precomunion />} />
        <Route path="/comunion" element={<Comunion />} />
        <Route path="/preconfirmacion" element={<Preconfirmacion />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<Admin />} />  
        <Route path="/admin/add-lesson" element={<AddLesson />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 Blog de Catequesis. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App