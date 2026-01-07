import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2>Contáctanos</h2>
        <p className="section-subtitle">Estamos aquí para ayudarte</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Dirección</h3>
              <p>General Rocha #19 <br/>Colonia Morales<br/>San Luis Potosí, SLP</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Teléfono</h3>
              <p>(444) 569-2986</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>catequesis@parroquia.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horarios de Catequesis</h3>
              <p>Sábados: 9:00 AM - 12:00 PM<br/>Domingos: 10:00 AM - 1:00 PM</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Envíanos un mensaje</h3>
            <form className="contact-form">
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Mensaje" rows={5} required></textarea>
              <button type="submit" className="btn-submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact