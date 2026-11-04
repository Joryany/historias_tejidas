import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TarjetaProducto from '../components/TarjetaProducto';
import '../style.css';
import '../css/paginas/favoritos.css';

function Favoritos() {
  const [productosFavoritos, setProductosFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const idsGuardados = JSON.parse(localStorage.getItem("favoritosHT")) || [];

    
    if (idsGuardados.length === 0) {
      setCargando(false);
      return;
    }

   
    fetch(`${import.meta.env.VITE_API_URL}/productos`)
      .then((respuesta) => respuesta.json())
      .then((todos) => {
       
        const filtrados = todos.filter((producto) => 
          idsGuardados.includes(producto.id)
        );
        setProductosFavoritos(filtrados);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error cargando favoritos:", error);
        setCargando(false);
      });
  }, []);

 
  const eliminarFavorito = (idProducto) => {
    const idsGuardados = JSON.parse(localStorage.getItem("favoritosHT")) || [];
    const nuevosIds = idsGuardados.filter((id) => id !== idProducto);
    
    localStorage.setItem("favoritosHT", JSON.stringify(nuevosIds));
    
   
    const nuevosFiltrados = productosFavoritos.filter((p) => p.id !== idProducto);
    setProductosFavoritos(nuevosFiltrados);
  };

  return (
    <div>
      <header>
        <img src="/logo-sin-texto.png" alt="Logo" />
        <nav className='navegador_principal'>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav__a--activo" : ""}>Inicio</NavLink>
          <NavLink to="/catalogo" className={({ isActive }) => isActive ? "nav__a--activo" : ""}>Catálogo</NavLink>
          <NavLink to="/personaliza" className={({ isActive }) => isActive ? "nav__a--activo" : ""}>Personaliza</NavLink>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? "nav__a--activo" : ""}>Carrito</NavLink>
          <NavLink to="/favoritos" className={({ isActive }) => isActive ? "nav__a--activo" : ""}>♥</NavLink>
        
        </nav>
      </header>

      <main className="pagina-favoritos">
        <section>
          <h1>Tus próximas historias a recordar:</h1>

        {cargando ? (
          <p>Buscando tus historias favoritas...</p>
        ) : productosFavoritos.length === 0 ? (
          <div className="carrito-vacio">
            <h2>Aún no has guardado ninguna historia ♥</h2>
            <p>Explora el catálogo y dale al corazón a los amigurumis que más te gusten.</p>
            <Link to="/catalogo" className="button">Explorar Catálogo</Link>
          </div>
        ) : (
          <article className="pagina-favoritos_container">
            {productosFavoritos.map((prod) => (
              <div key={prod.id} className="favorito-wrapper">
                <TarjetaProducto 
                  id={prod.id}
                  nombre={prod.nombre} 
                  precio={prod.precio} 
                  imagen={prod.imagen}
                  alt={prod.alt}
                />
                <button 
                  className="btn-quitar-favorito" 
                  onClick={() => eliminarFavorito(prod.id)}
                  title="Quitar de favoritos"
                >
                  ✕ Quitar
                </button>
              </div>
            ))}
          </article>
        )}
        </section>
      </main>

      <footer>
        <div className="footer-container">

          <div className="footer-marca">
            <img src="/logo-sin-texto.png" alt="Logo de Historias Tejidas" />
            <h2>Historias Tejidas</h2>
          </div>

          <div className="cont-columna">

            <div className="footer-columna">
              <h3>Navegación</h3>
              <Link to="/">Inicio</Link>
              <Link to="/catalogo">Catálogo</Link>
              <Link to="/personaliza">Personaliza</Link>
            </div>

            <div className="footer-columna">
              <h3>Ayuda</h3>
              <a href="#pf">Preguntas frecuentes</a>
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
    </div>
  );
}

export default Favoritos;