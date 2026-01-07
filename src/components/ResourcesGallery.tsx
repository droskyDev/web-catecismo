import './ResourcesGallery.css'

function ResourcesGallery() {
  return (
    <section className="resources" id="recursos">
      <div className="container">
        <h2>Galería de Eventos</h2>
        <p className="section-subtitle">Momentos especiales de nuestra comunidad</p>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600" alt="Evento 1" />
            <div className="gallery-overlay">
              <h3>Primera Comunión 2024</h3>
              <p>Una celebración llena de alegría y fe con nuestros niños</p>
            </div>
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" alt="Evento 2" />
            <div className="gallery-overlay">
              <h3>Retiro de Confirmación</h3>
              <p>Jóvenes fortaleciendo su fe en un ambiente de fraternidad</p>
            </div>
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600" alt="Evento 3" />
            <div className="gallery-overlay">
              <h3>Convivencia Familiar</h3>
              <p>Familias unidas en comunidad y oración</p>
            </div>
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600" alt="Evento 4" />
            <div className="gallery-overlay">
              <h3>Misa de Niños</h3>
              <p>Celebración especial con nuestros pequeños catequizandos</p>
            </div>
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?w=600" alt="Evento 5" />
            <div className="gallery-overlay">
              <h3>Curso de Catequistas</h3>
              <p>Formación continua para nuestros guías espirituales</p>
            </div>
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600" alt="Evento 6" />
            <div className="gallery-overlay">
              <h3>Celebración Navideña</h3>
              <p>Compartiendo la alegría del nacimiento de Jesús</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourcesGallery