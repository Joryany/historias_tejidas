import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style.css';
import '../css/paginas/carrito.css';
import Calendario from "../components/Calendario";
import Toast from '../components/Toast';

function Carrito() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carritoHT");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [enviado, setEnviado] = useState(false);
  
  const [nombre, setNombre] = useState(() => {
    const cliente = JSON.parse(localStorage.getItem("clienteHT"));
    return cliente?.nombre || "";
  });
  const [whatsapp, setWhatsapp] = useState(() => {
    const cliente = JSON.parse(localStorage.getItem("clienteHT"));
    return cliente?.whatsapp || "";
  });
  const [lugar, setLugar] = useState(() => {
    const cliente = JSON.parse(localStorage.getItem("clienteHT"));
    return cliente?.lugar || "";
  });

  const [errorWhatsapp, setErrorWhatsapp] = useState(""); 
  const [fecha, setFecha] = useState("");

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMensaje, setToastMensaje] = useState("");
  const [toastTipo, setToastTipo] = useState("exito");

  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem("carritoHT", JSON.stringify(nuevoCarrito));
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    actualizarCarrito(nuevoCarrito);
  };

  const cambiarCantidad = (index, delta) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += delta;
    
    if (nuevoCarrito[index].cantidad <= 0) {
      eliminarProducto(index);
    } else {
      actualizarCarrito(nuevoCarrito);
    }
  };
  
  let total = 0;
  carrito.forEach(item => {
    total += item.precioFinal * item.cantidad;
  });

  const procesarPedido = (e) => {
    e.preventDefault();

    const datosPedido = {
      nombre,
      whatsapp: `+57${whatsapp}`,
      fecha,
      lugar,
      productos: carrito,
      total: total
    };

    fetch(`${import.meta.env.VITE_API_URL}/pedidos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosPedido),
    })
      .then((respuesta) => {
        if (respuesta.ok) {
          localStorage.setItem("clienteHT", JSON.stringify({ nombre, whatsapp, lugar }));
          setEnviado(true);
          localStorage.removeItem("carritoHT");
          setCarrito([]);
          
          setToastMensaje("¡Pedido enviado con éxito!");
          setToastTipo("exito");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);

        } else {
          setToastMensaje("Hubo un error al enviar el pedido. Intenta de nuevo.");
          setToastTipo("error");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMensaje("Error de conexión. Revisa tu internet.");
        setToastTipo("error");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
      });
  };

  return (
    <div>
      <Toast mensaje={toastMensaje} tipo={toastTipo} visible={toastVisible} />

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

      <main className="pagina-carrito">
        {enviado ? (
          <div className="carrito-vacio">
            <h2>¡Pedido enviado con éxito!</h2>
            <p>Nos pondremos en contacto por WhatsApp pronto para coordinar el pago y la entrega.</p>
            <Link to="/catalogo" className="button">Volver al catálogo</Link>
          </div>
        ) : 
        
        mostrarFormulario ? (
          <form onSubmit={procesarPedido} className="checkout-form">
            <h2>Datos de contacto</h2>
            <p>Total a pagar: <strong>${total.toLocaleString("es-CO")} COP</strong></p>

            <label htmlFor="nombre-cliente">Nombre completo:</label>
            <input id="nombre-cliente" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

            <label htmlFor="whatsapp-cliente">WhatsApp:</label>
            <div className="input-con-prefijo">
              <span className="prefijo">+57</span>
              <input 
                id="whatsapp-cliente"
                type="tel" 
                value={whatsapp} 
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                  if (!/^3\d{9}$/.test(e.target.value)) {
                    setErrorWhatsapp("⚠️ Debe ser un celular válido, por favor revisar el número ingresado.");
                  } else {
                    setErrorWhatsapp(""); 
                  }
                }} 
                placeholder="3001234567"
                maxLength="10"
                required 
              />
            </div>
            {errorWhatsapp && <span className="error-mensaje">{errorWhatsapp}</span>}

            <label htmlFor="fecha-cliente">Fecha deseada de entrega:</label>
            <Calendario id="fecha-cliente" fecha={fecha} setFecha={setFecha} />

            <label htmlFor="direccion-cliente">Dirección de entrega:</label>
            <input 
              id="direccion-cliente"
              type="text" 
              value={lugar} 
              onChange={(e) => setLugar(e.target.value)} 
              placeholder="Ej: Carrera 45 # 72-10, Barranquilla"
              required 
            />

            {lugar.length > 5 && !lugar.toLowerCase().includes("colombia") && !lugar.toLowerCase().includes("barranquilla") && !lugar.toLowerCase().includes("atlantico") && (
              <span className="error-mensaje">
                Por el momento solo realizamos entregas en Colombia (Barranquilla). <br/> ⚠️ Agrega tu ciudad/país a la dirección.
              </span>
            )}

            {lugar.length > 5 && (lugar.toLowerCase().includes("colombia") || lugar.toLowerCase().includes("barranquilla") || lugar.toLowerCase().includes("atlantico")) && (
              <div className="contenedor-mapa">
                <iframe
                  title="Mapa de entrega"
                  width="100%"
                  height="200"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(lugar + ", Colombia")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            )}

            <div className="checkout-botones">
              <button type="button" className="button" onClick={() => setMostrarFormulario(false)}>Volver al carrito</button>
              <button type="submit" className="button btn-finalizar">Confirmar Pedido</button>
            </div>
          </form>
        ) :

        carrito.length === 0 ? (
          <div className="carrito-vacio">
            <h2>Aún te faltan Historias por Contar...</h2>
            <div className="carrito-vacio-link">
              <Link to="/catalogo" className="button">Ir a ver productos</Link>
              <Link to="/personaliza" className="button">Crear mi Historia</Link>
            </div>
          </div>
        ) : 
        
        (
          <div>
            <div className="lista-carrito">
              {carrito.map((item, index) => (
                <div key={`${item.id}-${index}`} className="item-carrito">
                  
                  <img 
                    src={item.imagen ? `/${item.imagen.replace("assets/img/", "")}` : "/logo-sin-texto.png"} 
                    alt={item.alt || "Producto"} 
                    className="item-carrito-imagen" 
                  />
                  
                  <div className="item-carrito-detalles">
                    <h3>{item.nombre}</h3>
                    
                    {item.selecciones && Object.keys(item.selecciones).length > 0 && (
                      <p className="item-carrito-opciones">
                        {Object.values(item.selecciones).map(sel => sel.nombre).join(" | ")}
                      </p>
                    )}
                    
                    <p className="item-carrito-precio">${item.precioFinal.toLocaleString("es-CO")} COP</p>
                    
                    <div className="item-carrito-cantidad">
                      <button onClick={() => cambiarCantidad(index, -1)} className="button">-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => cambiarCantidad(index, 1)} className="button">+</button>
                    </div>
                  </div>

                  <button onClick={() => eliminarProducto(index)} className="item-carrito-eliminar" title="Eliminar">🗑️</button>
                </div>
              ))}
            </div> 
            <div className="carrito-resumen">
              <h2>Total: ${total.toLocaleString("es-CO")} COP</h2>
              <button className="button btn-finalizar" onClick={() => setMostrarFormulario(true)}>
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-derechos">
          <p>© 2026 Historias Tejidas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Carrito;