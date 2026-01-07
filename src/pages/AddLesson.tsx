import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import './AddLesson.css'

function AddLesson() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    grupo: '',
    titulo: '',
    fecha: '',
    versiculo: '',
    cita: '',
    resumen: '',
    tarea: '',
    videoUrl: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addDoc(collection(db, 'lecciones'), {
        ...formData,
        createdAt: Timestamp.now()
      })
      
      setSuccess(true)
      setFormData({
        grupo: '',
        titulo: '',
        fecha: '',
        versiculo: '',
        cita: '',
        resumen: '',
        tarea: '',
        videoUrl: ''
      })

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Error al agregar lección:', error)
      alert('Error al agregar la lección')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="add-lesson-page">
      <div className="add-lesson-header">
        <div className="container">
          <button onClick={() => navigate('/admin')} className="back-btn">
            ← Volver al panel
          </button>
          <h1>📝 Agregar Nueva Lección</h1>
        </div>
      </div>

      <div className="container">
        <div className="lesson-form-container">
          {success && (
            <div className="success-message">
              ✅ ¡Lección agregada exitosamente!
            </div>
          )}

          <form onSubmit={handleSubmit} className="lesson-form">
            <div className="form-row">
              <div className="form-group">
                <label>Grupo *</label>
                <select name="grupo" value={formData.grupo} onChange={handleChange} required>
                  <option value="">Selecciona un grupo</option>
                  <option value="mi-primera-catequesis">Mi Primera Catequesis</option>
                  <option value="precomunion">Precomunión</option>
                  <option value="comunion">Comunión</option>
                  <option value="preconfirmacion">Preconfirmación</option>
                  <option value="confirmacion">Confirmación</option>
                </select>
              </div>

              <div className="form-group">
                <label>Fecha de la lección *</label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Título de la lección *</label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ej: La Eucaristía - Pan de Vida"
                required
              />
            </div>

            <div className="form-group">
              <label>Versículo del día *</label>
              <textarea
                name="versiculo"
                value={formData.versiculo}
                onChange={handleChange}
                placeholder='Ej: "Yo soy el pan vivo que bajó del cielo..."'
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label>Cita bíblica *</label>
              <input
                type="text"
                name="cita"
                value={formData.cita}
                onChange={handleChange}
                placeholder="Ej: Juan 6:51"
                required
              />
            </div>

            <div className="form-group">
              <label>Resumen de la lección *</label>
              <textarea
                name="resumen"
                value={formData.resumen}
                onChange={handleChange}
                placeholder="Describe lo que se vio en la clase..."
                rows={5}
                required
              />
            </div>

            <div className="form-group">
              <label>Tarea *</label>
              <textarea
                name="tarea"
                value={formData.tarea}
                onChange={handleChange}
                placeholder="Escribe las tareas separadas por saltos de línea"
                rows={4}
                required
              />
            </div>

            <div className="form-group">
              <label>URL del video (opcional)</label>
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Guardando...' : '💾 Guardar Lección'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddLesson