import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TarjetaProducto from '../components/TarjetaProducto';
import '../style.css';
import '../css/paginas/favoritos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Favoritos() {
  const [productosFavoritos, setProductosFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const idsGuardados = JSON.parse(localStorage.getItem("favoritosHT")) || [];

    
    if (idsGuardados.length === 0) {
      setTimeout(() => setCargando(false), 0);
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
      <Header />
        

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

      <Footer />
        
    </div>
  );
}

export default Favoritos;