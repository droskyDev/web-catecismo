import './GroupPage.css'

function Preconfirmacion() {
  return (
    <div className="group-page">
      <div className="group-header">
        <div className="container">
          <h1>Preconfirmación</h1>
          <p>Fortaleciendo nuestra fe</p>
        </div>
      </div>

      <div className="container">
        <section className="lessons-section">
          <h2>Lecciones Recientes</h2>
          
          <article className="lesson-card">
            <div className="lesson-header">
              <h3>Los Dones del Espíritu Santo</h3>
              <span className="lesson-date">10 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Recibirán poder cuando el Espíritu Santo venga sobre ustedes" 
                <span className="verse-ref"> - Hechos 1:8</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Estudiamos los siete dones del Espíritu Santo: Sabiduría, Entendimiento,
                Consejo, Fortaleza, Ciencia, Piedad y Temor de Dios. Aprendimos cómo
                cada don nos ayuda en nuestra vida diaria.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Memoriza los siete dones del Espíritu Santo</li>
                <li>Escribe una situación donde necesites cada don</li>
                <li>Reza al Espíritu Santo pidiendo sus dones</li>
              </ul>

              <div className="lesson-video">
                <h4>🎥 Video complementario:</h4>
                <div className="video-placeholder">
                  <p>📹 Video: "Los Dones del Espíritu Santo explicados"</p>
                  <p className="video-note">(El video será agregado por el catequista)</p>
                </div>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <div className="lesson-header">
              <h3>La Iglesia y su Misión</h3>
              <span className="lesson-date">3 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Vayan por todo el mundo y prediquen el Evangelio" 
                <span className="verse-ref"> - Marcos 16:15</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Reflexionamos sobre nuestra misión como cristianos de ser luz
                en el mundo y compartir el amor de Dios con los demás.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Investiga sobre un santo que admires</li>
                <li>Piensa en cómo puedes ser misionero en tu escuela</li>
              </ul>
            </div>
          </article>

        </section>
      </div>
    </div>
  )
}

export default Preconfirmacion