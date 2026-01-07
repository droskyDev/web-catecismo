import { useState, useEffect } from 'react'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import './GroupPage.css'

interface Leccion {
  id: string
  titulo: string
  fecha: string
  versiculo: string
  cita: string
  resumen: string
  tarea: string
  videoUrl?: string
}

function Comunion() {
  const [lecciones, setLecciones] = useState<Leccion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLecciones = async () => {
      try {
        const q = query(
          collection(db, 'lecciones'),
          where('grupo', '==', 'comunion'),
          orderBy('createdAt', 'desc')
        )
        
        const querySnapshot = await getDocs(q)
        const leccionesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Leccion[]
        
        setLecciones(leccionesData)
      } catch (error) {
        console.error('Error al cargar lecciones:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLecciones()
  }, [])

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  return (
    <div className="group-page">
      <div className="group-header">
        <div className="container">
          <h1>Comunión</h1>
          <p>Preparándonos para recibir el Cuerpo de Cristo</p>
        </div>
      </div>

      <div className="container">
        <section className="lessons-section">
          <h2>Lecciones Recientes</h2>
          
          {loading ? (
            <div className="loading-message">Cargando lecciones...</div>
          ) : lecciones.length === 0 ? (
            <div className="no-lessons-message">
              <p>Todavía no hay lecciones publicadas para este grupo.</p>
            </div>
          ) : (
            lecciones.map((leccion) => (
              <article key={leccion.id} className="lesson-card">
                <div className="lesson-header">
                  <h3>{leccion.titulo}</h3>
                  <span className="lesson-date">{formatDate(leccion.fecha)}</span>
                </div>
                
                <div className="lesson-content">
                  <h4>📖 Lectura del día:</h4>
                  <p className="verse">
                    {leccion.versiculo}
                    <span className="verse-ref"> - {leccion.cita}</span>
                  </p>

                  <h4>📝 Resumen de la lección:</h4>
                  <p>{leccion.resumen}</p>

                  <h4>✏️ Tarea para la próxima clase:</h4>
                  <ul>
                    {leccion.tarea.split('\n').map((tarea, index) => (
                      tarea.trim() && <li key={index}>{tarea}</li>
                    ))}
                  </ul>

                  {leccion.videoUrl && (
                    <div className="lesson-video">
                      <h4>🎥 Video complementario:</h4>
                      <div className="video-placeholder">
                        <p>📹 <a href={leccion.videoUrl} target="_blank" rel="noopener noreferrer">Ver video</a></p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  )
}

export default Comunion