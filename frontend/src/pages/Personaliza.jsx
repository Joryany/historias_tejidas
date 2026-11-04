import { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import '../style.css';
import '../css/paginas/personaliza.css';
import Calendario from "../components/Calendario";
import Toast from '../components/Toast';

function Personaliza() {
  const { idProducto } = useParams();   
  const [nombreProducto, setNombreProducto] = useState("");
  const [imagenProducto, setImagenProducto] = useState("");

  // AQUÍ ESTÁ LA MAGIA DEL AUTOCOMPLETADO:
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

  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  const [queEs, setQueEs] = useState("");
  const [material, setMaterial] = useState("");
  const [tamano, setTamano] = useState("");
  const [accesorios, setAccesorios] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [errorWhatsapp, setErrorWhatsapp] = useState("");

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMensaje, setToastMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    const datosPedido = {
      productoId: idProducto || null, 
      nombre: nombre,
      whatsapp: `+57${whatsapp}`, 
      fecha: fecha,
      lugar: lugar,
      descripcion: descripcion,
      queEs: queEs,
      material: material,
      tamano: tamano,
      accesorios: accesorios
    };

    fetch(`${import.meta.env.VITE_API_URL}/personalizados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPedido),
    })
      .then((respuesta) => {
        if (respuesta.ok) {
          // GUARDAMOS LOS DATOS DEL CLIENTE PARA LA PRÓXIMA VEZ
          localStorage.setItem("clienteHT", JSON.stringify({ nombre, whatsapp, lugar }));

          setEnviado(true); 
          
          setToastMensaje("¡Solicitud enviada con éxito! Te contactaremos pronto.");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);
          
        } else {
          setToastMensaje("Hubo un error al enviar. Intenta de nuevo.");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);
        }
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setToastMensaje("Error de conexión. Revisa tu internet.");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
      });
  };

  useEffect(() => {
    if (idProducto) {
      fetch(`${import.meta.env.VITE_API_URL}/productos/${idProducto}`)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setNombreProducto(datos.nombre); 
          setImagenProducto(datos.imagen);
        })
        .catch((error) => console.error("Error al buscar nombre e imagen del producto:", error));
    }
  }, [idProducto]);

  return (
    <div>
      <Toast mensaje={toastMensaje} tipo={toastVisible ? "exito" : "error"} visible={toastVisible} />

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

      <main className="pagina-personaliza">
        <h1>
          {idProducto ? "Personaliza tu producto" : "Crea Tu Historia"}
        </h1>
        
        <section className="personaliza__informacion">
          {idProducto && (
            <p>Estás modificando a: "{nombreProducto}"</p>
          )}
          
          {idProducto && (
            <img 
              src={`/${imagenProducto.replace("assets/img/", "")}`} 
              alt={nombreProducto} 
            />
          )}
        </section>

        {enviado ? (
          <div className="exito-mensaje">
            <h3>¡Solicitud enviada con éxito!</h3>
            <p>Nos pondremos en contacto contigo por WhatsApp pronto.</p>
            <Link to="/catalogo" className="button">Volver al catálogo</Link>
          </div>
        ) : (
          <form onSubmit={manejarEnvio} className="form-personaliza">
            
            <label>Nombre completo:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

            <label>WhatsApp:</label>
            <div className="input-con-prefijo">
              <span className="prefijo">+57</span>
              <input 
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

            <label>Fecha de entrega deseada:</label>
            <Calendario fecha={fecha} setFecha={setFecha} />

            <label>Dirección de entrega:</label>
            <input 
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
                  style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(lugar + ", Colombia")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            )}

            {!idProducto && (
              <>
                <label>¿Qué deseas que sea? (Amigurumi, accesorio, bolso...):</label>
                <input type="text" value={queEs} onChange={(e) => setQueEs(e.target.value)} required />

                <label>Material preferido:</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)} required>
                  <option value="">Selecciona un material...</option>
                  <option value="algodon">Algodón 100%</option>
                  <option value="coral">Hilo Coral (Acrílico)</option>
                  <option value="poliester">Poliéster</option>
                  <option value="bebes">Hilo para bebés (Hipoalergénico)</option>
                </select>

                <label>Tamaño estimado:</label>
                <select value={tamano} onChange={(e) => setTamano(e.target.value)} required>
                  <option value="">Selecciona un tamaño...</option>
                  <option value="pequeno">Pequeño (8 - 10 cm)</option>
                  <option value="mediano">Mediano (15 - 20 cm)</option>
                  <option value="grande">Grande (30 cm o más)</option>
                </select>

                <label>Accesorios extra:</label>
                <input type="text" value={accesorios} onChange={(e) => setAccesorios(e.target.value)} />
              </>
            )}

            <label>
              {idProducto ? "¿Qué te gustaría cambiar o añadir del producto? Lo haremos realidad." : "Describe como deseas tu historia, te ayudaremos a hacerla realidad."}:
            </label>
            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="5" required></textarea>

            <button type="submit" className="button">Enviar pedido</button>
          </form>
        )}
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

export default Personaliza;