
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import TarjetaProducto from '../components/TarjetaProducto';
import '../style.css';
import '../css/paginas/producto-detalle.css';

function ProductoDetalle() {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [relacionados, setRelacionados] = useState([]);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [selecciones, setSelecciones] = useState({});
  const [precioFinal, setPrecioFinal] = useState(0);


  const carruselRef = useRef(null);

  const moverIzquierda = () => {
    carruselRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const moverDerecha = () => {
    carruselRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

 
  const manejarCambioOpcion = (grupoNombre, item, indexGrupo) => {
    const nuevasSelecciones = {
      ...selecciones,
      [grupoNombre]: item
    };
    setSelecciones(nuevasSelecciones);

    let precioCalculado = producto.precio;
    
    Object.values(nuevasSelecciones).forEach((seleccion) => {
        if (seleccion.multiplicador) {
            precioCalculado = precioCalculado * seleccion.multiplicador;
        }
    });

    setPrecioFinal(precioCalculado);
  };

  // ========== FUNCIONES PARA EL CARRITO Y FAVORITOS ==========

  const agregarAlCarrito = () => {
   
    const carritoGuardado = JSON.parse(localStorage.getItem("carritoHT")) || [];
    
    
    const productoParaCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      alt: producto.alt,
      precioBase: producto.precio,
      precioFinal: precioFinal, 
      cantidad: 1,
      selecciones: selecciones 
    };


    const nuevoCarrito = [...carritoGuardado, productoParaCarrito];
  
    localStorage.setItem("carritoHT", JSON.stringify(nuevoCarrito));
    
   
    alert("¡Añadido al carrito!");
    setModalAbierto(false);
  };

  const toggleFavorito = () => {
    
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritosHT")) || [];
   
    const yaEsFavorito = favoritosGuardados.includes(producto.id);

    let nuevosFavoritos;
    if (yaEsFavorito) {
   
      nuevosFavoritos = favoritosGuardados.filter(id => id !== producto.id);
    } else {
    // Si no está, lo agregamos
      nuevosFavoritos = [...favoritosGuardados, producto.id];
    }

  
    localStorage.setItem("favoritosHT", JSON.stringify(nuevosFavoritos));
    
   
    window.location.reload(); 
  };

    useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/productos/${id}`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Producto no encontrado");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProducto(datos);  
        setCargando(false);  
      })
      .catch((error) => {
        console.error(error);
        setCargando(false);  
      });
  }, [id]); 

   useEffect(() => {
    if (producto) {
      fetch(`${import.meta.env.VITE_API_URL}/productos`)
        .then((respuesta) => respuesta.json())
        .then((todos) => {
            const filtrados = todos.filter(function(p) {
                return p.categoria === producto.categoria && p.id !== producto.id;
            });
            
            
            const mezclados = [...filtrados].sort(() => Math.random() - 0.5);
            setRelacionados(mezclados.slice(0, 6));
        })
        .catch((error) => console.error("Error cargando relacionados:", error));
    }
  }, [producto]); 


   if (cargando) {
    return (
      <div className='mensaje_carga'> 
        <h2>Cargando el producto...</h2>
        <h3>Agradecemos su paciencia.</h3>
      </div>
    );
  }

  if (!producto) {
    return (
    <div className='mensaje_carga'> 
    <h2>No se encontró el producto</h2>
    <h3>Lo siento por el inconveniente, le invitamos a ver otros amigurumis.</h3>
    </div>
    );
  }


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

      <main>
        <div className="producto-pagina">
          

          <section id="producto">

              <img 
                id="imagen" 
                src={producto.imagen ? `/${producto.imagen.replace("assets/img/", "")}` : "/logo-sin-texto.png"} 
                alt={producto.alt} 
              />
              <div id="producto__container">
              <span id="etiqueta">{producto.etiqueta}</span>
              
              <h1 id="nombre">{producto.nombre}</h1>
              
              <h2 id="precio">
                  ${producto.precio.toLocaleString("es-CO")} COP
              </h2>

              <div id="btn__producto">
                
              
                <button 
                  id="favorito" 
                  title="Guardar en favoritos" 
                  onClick={toggleFavorito}
                >
                  {JSON.parse(localStorage.getItem("favoritosHT"))?.includes(producto.id) ? "♥" : "♡"}
                </button>
                
                <button 
                className="button" 
                onClick={() => {
                  setModalAbierto(true);
                  
                 
                  let precioInicial = producto.precio;
                  const seleccionesIniciales = {};

                  if (producto.opciones) {
                      producto.opciones.forEach((grupo) => {
                          const primerItem = grupo.items[0];
                          seleccionesIniciales[grupo.nombre] = primerItem;
                          if (primerItem.multiplicador) {
                              precioInicial = precioInicial * primerItem.multiplicador;
                          }
                      });
                  }

                  setSelecciones(seleccionesIniciales);
                  setPrecioFinal(precioInicial);
                }}
              >
                Comprar
              </button>

                <Link to={`/personaliza/${producto.id}`} className="button">
                  Personalizar
                </Link>

              </div>

              <div id="producto__container--especificaciones">
                  
                  <div className="container__especificaciones--elemento">
                  <h3>La historia detrás del tejido</h3>
                  <p id="historia__p">{producto.historia}</p>
                  </div>

                  <div className="container__especificaciones--elemento">
                  <h4>Materiales del amigurumi</h4>
                  <p id="materiales__p">{producto.materiales}</p>
                  </div>

              </div>
            </div>
          </section>
          <section className="gustar">
            <h2>También te podría gustar</h2>
            
            <div className="carrusel-wrapper">
              <button className="btn-flecha" onClick={moverIzquierda}>←</button>
              
              <div className="carrusel-relacionados" ref={carruselRef}>
                {relacionados.map(function(prod) {
                    return (
                        <div className="carrusel-item" key={prod.id}>
                            <TarjetaProducto 
                                id={prod.id}
                                nombre={prod.nombre} 
                                precio={prod.precio} 
                                imagen={prod.imagen}
                                alt={prod.alt}
                            />
                        </div>
                    );
                })}
              </div>

              <button className="btn-flecha" onClick={moverDerecha}>→</button>
            </div>
          </section>
        </div>

        {modalAbierto && (
          <div className="modal-overlay activo" onClick={() => setModalAbierto(false)}>
            <div className="modal-cuadro" onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-cerrar" onClick={() => setModalAbierto(false)}>✕</button>
              
              <h2>Personaliza tu {producto.nombre}</h2>
              
              {producto.opciones && producto.opciones.length > 0 ? (
                producto.opciones.map((grupo, indexGrupo) => (
                  <div className="grupo-modal" key={indexGrupo}>
                    <h3>{grupo.nombre}</h3>
                    {grupo.items.map((item, indexItem) => (
                      <label className="opcion-modal" key={indexItem}>
                        <input 
                          type="radio" 
                          name={`grupo-${indexGrupo}`} 
                          value={item.value}
                          defaultChecked={indexItem === 0}
                          onChange={() => manejarCambioOpcion(grupo.nombre, item, indexGrupo)} 
                        />
                        {item.nombre} 
                      </label>
                    ))}
                  </div>
                ))
              ) : (
                <p>Este producto no tiene opciones adicionales.</p>
              )}

              <div className="modal-footer">
                <h3>Total: ${precioFinal.toLocaleString("es-CO")} COP</h3>
                <button className="button" onClick={agregarAlCarrito}>
                  Añadir al Carrito
                </button>
              </div>

            </div>
          </div>
        )}
      </main>
      <footer>
        <div className="footer-container">

          <div className="footer-marca">
            <img src="/logo-sin-texto.png" alt="Logo de Historias Tejidas"/>
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
              {/* Este se queda como <a> porque apunta a un ancla interna (#pf) */}
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

export default ProductoDetalle;