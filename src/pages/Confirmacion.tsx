import './GroupPage.css'

function Confirmacion() {
  return (
    <div className="group-page">
      <div className="group-header">
        <div className="container">
          <h1>Confirmación</h1>
          <p>Sellados con el Espíritu Santo</p>
        </div>
      </div>

      <div className="container">
        <section className="lessons-section">
          <h2>Lecciones Recientes</h2>
          
          <article className="lesson-card">
            <div className="lesson-header">
              <h3>El Sacramento de la Confirmación</h3>
              <span className="lesson-date">10 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Todos fueron llenos del Espíritu Santo" 
                <span className="verse-ref"> - Hechos 2:4</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Profundizamos en el significado del Sacramento de la Confirmación,
                cómo nos fortalece en nuestra fe y nos hace testigos valientes de Cristo.
                Estudiamos los símbolos del sacramento: la unción, la imposición de manos
                y las palabras del obispo.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Reflexiona sobre el nombre de confirmación que elegirás</li>
                <li>Escribe una carta a tu padrino/madrina explicando por qué lo elegiste</li>
                <li>Investiga sobre tu santo patrono</li>
                <li>Practica una oración personal al Espíritu Santo</li>
              </ul>

              <div className="lesson-video">
                <h4>🎥 Video complementario:</h4>
                <div className="video-placeholder">
                  <p>📹 Video: "El Sacramento de la Confirmación - Testimonio de jóvenes"</p>
                  <p className="video-note">(El video será agregado por el catequista)</p>
                </div>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <div className="lesson-header">
              <h3>Ser Testigo de Cristo</h3>
              <span className="lesson-date">3 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Serán mis testigos hasta los confines de la tierra" 
                <span className="verse-ref"> - Hechos 1:8</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Reflexionamos sobre el compromiso que asumimos con la Confirmación
                de vivir y compartir nuestra fe activamente. Hablamos sobre los
                desafíos de ser cristiano en el mundo actual.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Escribe tu testimonio de fe personal</li>
                <li>Identifica tres formas concretas de vivir tu fe esta semana</li>
                <li>Comparte el Evangelio con alguien de tu escuela</li>
              </ul>
            </div>
          </article>

        </section>
      </div>
    </div>
  )
}

export default Confirmacion