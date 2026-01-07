import Hero from '../components/Hero'
import ResourcesGallery from '../components/ResourcesGallery'
import Contact from '../components/Contact'
import '../App.css'

function Home() {
  return (
    <>
      <Hero />

      <main className="main">
        <div className="container">
          <section className="posts" id="noticias">
            <h3>Últimas Noticias y Avisos</h3>
            <div className="posts-grid">
              <article className="post-card">
                <h4>Retiro de Confirmación</h4>
                <p className="post-date">15 de Diciembre, 2025</p>
                <p>Los jóvenes de confirmación tendrán un retiro especial este fin de semana...</p>
                <a href="#" className="btn">Leer más</a>
              </article>

              <article className="post-card">
                <h4>Celebración de Primera Comunión</h4>
                <p className="post-date">20 de Diciembre, 2025</p>
                <p>Se aproxima la ceremonia de Primera Comunión para nuestros niños...</p>
                <a href="#" className="btn">Leer más</a>
              </article>

              <article className="post-card">
                <h4>Inicio de Nuevo Ciclo</h4>
                <p className="post-date">8 de Enero, 2026</p>
                <p>Iniciamos un nuevo ciclo de catequesis. ¡Inscripciones abiertas!</p>
                <a href="#" className="btn">Leer más</a>
              </article>
            </div>
          </section>
        </div>
      </main>

      <ResourcesGallery />
      <Contact />
    </>
  )
}

export default Home