import { Link } from 'react-router-dom';
import '../style.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-marca">
          <img src="/logo-sin-texto.png" alt="Logo de Historias Tejidas" />
          <div>
            <h2>Historias Tejidas</h2>
          </div>
        </div>

        <div className="cont-columna">
          
   
          <div className="footer-columna">
            <h3>Navegación</h3>
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/personaliza">Personaliza</Link>
            
            <Link to="/favoritos" >Favoritos ♥</Link>
            <Link to="/carrito">Mi Carrito 🛒</Link>
          </div>

       
          <div className="footer-columna">
            <h3>Ayuda</h3>
            <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/contacto">Contacto</Link>
          </div>

      
          <div className="footer-columna">
            <h3>Información</h3>
            <Link to="/politica-privacidad">Política de privacidad</Link>
            <Link to="/terminos">Términos y condiciones</Link>
          </div>

        </div>
      </div>

      <div className="footer-derechos">
        <p>© 2026 Historias Tejidas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;