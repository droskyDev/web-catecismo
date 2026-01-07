import { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

function Admin() {
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        navigate('/login')
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  if (!user) return <div>Cargando...</div>

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="container">
          <h1>Panel de Administración</h1>
          <div className="admin-user-info">
            <span>👤 {user.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <div className="container admin-content">
        <div className="admin-welcome">
          <h2>¡Bienvenida al Panel de Administración!</h2>
          <p>Desde aquí podrás gestionar las lecciones de catequesis</p>
        </div>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>📝 Agregar Lección</h3>
            <p>Crea una nueva lección para cualquier grupo</p>
            <button className="card-btn" onClick={() => navigate('/admin/add-lesson')}>
            Agregar Lección
            </button>
          </div>

          <div className="admin-card">
            <h3>📋 Ver Lecciones</h3>
            <p>Revisa y edita las lecciones existentes</p>
            <button className="card-btn">Próximamente</button>
          </div>

          <div className="admin-card">
            <h3>🗑️ Eliminar Lección</h3>
            <p>Borra lecciones antiguas o incorrectas</p>
            <button className="card-btn">Próximamente</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin