import './GroupPage.css'

function Precomunion() {
  return (
    <div className="group-page">
      <div className="group-header">
        <div className="container">
          <h1>Precomunión</h1>
          <p>Preparándonos para el Sacramento</p>
        </div>
      </div>

      <div className="container">
        <section className="lessons-section">
          <h2>Lecciones Recientes</h2>
          
          <article className="lesson-card">
            <div className="lesson-header">
              <h3>El Sacramento de la Reconciliación</h3>
              <span className="lesson-date">10 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Si confesamos nuestros pecados, Él es fiel y justo para perdonarnos" 
                <span className="verse-ref"> - 1 Juan 1:9</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Aprendimos sobre la importancia de pedir perdón a Dios y a los demás.
                Conocimos los pasos para hacer una buena confesión y cómo el sacramento
                nos limpia el corazón para recibir a Jesús.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Aprende el Acto de Contrición</li>
                <li>Escribe en tu cuaderno: ¿Por qué es importante pedir perdón?</li>
                <li>Practica hacer un examen de conciencia con tus papás</li>
              </ul>

              <div className="lesson-video">
                <h4>🎥 Video complementario:</h4>
                <div className="video-placeholder">
                  <p>📹 Video: "Mi Primera Confesión"</p>
                  <p className="video-note">(El video será agregado por el catequista)</p>
                </div>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <div className="lesson-header">
              <h3>Los Mandamientos</h3>
              <span className="lesson-date">3 de Diciembre, 2025</span>
            </div>
            
            <div className="lesson-content">
              <h4>📖 Lectura del día:</h4>
              <p className="verse">
                "Si me aman, obedecerán mis mandamientos" 
                <span className="verse-ref"> - Juan 14:15</span>
              </p>

              <h4>📝 Resumen de la lección:</h4>
              <p>
                Estudiamos los Diez Mandamientos y cómo nos ayudan a vivir
                como Jesús quiere. Son reglas de amor que nos acercan a Dios.
              </p>

              <h4>✏️ Tarea para la próxima clase:</h4>
              <ul>
                <li>Memoriza los primeros cinco mandamientos</li>
                <li>Escribe un ejemplo de cómo cumplir cada uno</li>
              </ul>
            </div>
          </article>

        </section>
      </div>
    </div>
  )
}

export default Precomunion