import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/paginas/footer-pagina.css';

function Contacto() {
  return (
    <div>
      <Header />
      
      <main className="pagina-legal">
        <div className="legal-contenedor contacto-contenedor">
          <h1>Contáctanos</h1>
          <p className="fecha-actualizacion">¡Estamos aquí para ayudarte a tejer tu historia!</p>

            <div className="contacto-info">
                <h2>Atención al Cliente</h2>
                
                <div className="horario-destacado">
                <h3>🕒 Nuestro Horario</h3>
                <p><strong>Lunes a Sábado:</strong> 8:00 a.m. a 6:00 p.m.</p>
                <p><strong>Domingos y Festivos:</strong> Cerrado</p>
                </div>
                
                <p>📍 Ubicación: Barranquilla, Colombia (Atención virtual)</p>
                
                <div className="contacto-botones">
                <a href="https://wa.me/573247745820" target="_blank" rel="noreferrer" className="button whatsapp" >
                    Hablar por WhatsApp
                </a>
                <a href="mailto:historiastejidas@gmail.com" className="button" >
                    Enviar un Correo
                </a>
                </div>
            
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contacto;