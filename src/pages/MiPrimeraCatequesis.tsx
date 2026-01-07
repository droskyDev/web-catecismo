import './GroupPage.css'

function MiPrimeraCatequesis() {
  return (
    <div className="group-page">
      <div className="group-header">
        <div className="container">
          <h1>Mi Primera Catequesis</h1>
          <p>Los primeros pasos en la fe</p>
        </div>
      </div>

      <div className="container">
        <section className="lessons-section">
          <h2>Lecciones Recientes</h2>
          
          <article className="lesson-card">
            <div className="lesson-header">
              <h3>Dios nos ama</h3>
              <span className="lesson-date">10 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Porque tanto amó Dios al mundo, que dio a su Hijo único" 
                <span className="verse-ref"> - Juan 3:16</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Hoy aprendimos que Dios nos ama muchísimo y que siempre está con nosotros.
                Conocimos cómo Dios creó el mundo y a todas las personas con mucho amor.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Dibuja algo que Dios creó y que te gusta mucho</li>
                <li>Reza un Padrenuestro con tu familia antes de dormir</li>
                <li>Piensa en tres cosas por las que quieres darle gracias a Dios</li>
              </ul>

              <div className="lesson-video">
                <h4>🎥 Video complementario:</h4>
                <div className="video-placeholder">
                  <p>📹 Video: "Dios me ama - Canciones para niños"</p>
                  <p className="video-note">(El video será agregado por el catequista)</p>
                </div>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <div className="lesson-header">
              <h3>Jesús es mi amigo</h3>
              <span className="lesson-date">3 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Dejen que los niños vengan a mí" 
                <span className="verse-ref"> - Marcos 10:14</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Aprendimos que Jesús es nuestro mejor amigo y que siempre podemos hablar con Él.
                Conocimos historias de cómo Jesús amaba a los niños.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Haz un dibujo de Jesús</li>
                <li>Cuéntale a Jesús algo bonito antes de dormir</li>
              </ul>
            </div>
          </article>

        </section>
      </div>
    </div>
  )
}

export default MiPrimeraCatequesis