import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isGroupPage = location.pathname !== '/'

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link">
          <h1 className="logo">PARROQUIA NTRA. SEÑORA DE LOS DOLORES MORALES</h1>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
          
          <div className="dropdown">
            <button 
              className="dropdown-btn"
              onClick={toggleDropdown}
            >
              Grupos ▼
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/mi-primera-catequesis" onClick={closeMobileMenu}>Mi Primera Catequesis</Link>
              <Link to="/precomunion" onClick={closeMobileMenu}>Precomunión</Link>
              <Link to="/comunion" onClick={closeMobileMenu}>Comunión</Link>
              <Link to="/preconfirmacion" onClick={closeMobileMenu}>Preconfirmación</Link>
              <Link to="/confirmacion" onClick={closeMobileMenu}>Confirmación</Link>
            </div>
          </div>

          {!isGroupPage && (
            <>
              <a href="#recursos" onClick={closeMobileMenu}>Recursos</a>
              <a href="#contacto" onClick={closeMobileMenu}>Contacto</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header