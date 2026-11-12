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
  const [toastTipo, setToastTipo] = useState("exito");

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
          localStorage.setItem("clienteHT", JSON.stringify({ nombre, whatsapp, lugar }));
          setEnviado(true); 
          
          setToastMensaje("¡Solicitud enviada con éxito! Te contactaremos pronto.");
          setToastTipo("exito");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);
          
        } else {
          setToastMensaje("Hubo un error al enviar. Intenta de nuevo.");
          setToastTipo("error");
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 4000);
        }
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setToastMensaje("Error de conexión. Revisa tu internet.");
        setToastTipo("error");
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

      <main className="pagina-personaliza">
        <h1>{idProducto ? "Personaliza tu producto" : "Crea Tu Historia"}</h1>
        
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
            
            <label htmlFor="nombre-personaliza">Nombre completo:</label>
            <input id="nombre-personaliza" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

            <label htmlFor="whatsapp-personaliza">WhatsApp:</label>
            <div className="input-con-prefijo">
              <span className="prefijo">+57</span>
              <input 
                id="whatsapp-personaliza"
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

            <label htmlFor="fecha-personaliza">Fecha de entrega deseada:</label>
            <Calendario id="fecha-personaliza" fecha={fecha} setFecha={setFecha} />

            <label htmlFor="direccion-personaliza">Dirección de entrega:</label>
            <input 
              id="direccion-personaliza"
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

            {!idProducto && (
              <>
                <label htmlFor="queEs-personaliza">¿Qué deseas que sea? (Amigurumi, accesorio, bolso...):</label>
                <input id="queEs-personaliza" type="text" value={queEs} onChange={(e) => setQueEs(e.target.value)} required />

                <label htmlFor="material-personaliza">Material preferido:</label>
                <select id="material-personaliza" value={material} onChange={(e) => setMaterial(e.target.value)} required>
                  <option value="">Selecciona un material...</option>
                  <option value="algodon">Algodón 100%</option>
                  <option value="coral">Hilo Coral (Acrílico)</option>
                  <option value="poliester">Poliéster</option>
                  <option value="bebes">Hilo para bebés (Hipoalergénico)</option>
                </select>

                <label htmlFor="tamano-personaliza">Tamaño estimado:</label>
                <select id="tamano-personaliza" value={tamano} onChange={(e) => setTamano(e.target.value)} required>
                  <option value="">Selecciona un tamaño...</option>
                  <option value="pequeno">Pequeño (8 - 10 cm)</option>
                  <option value="mediano">Mediano (15 - 20 cm)</option>
                  <option value="grande">Grande (30 cm o más)</option>
                </select>

                <label htmlFor="accesorios-personaliza">Accesorios extra:</label>
                <input id="accesorios-personaliza" type="text" value={accesorios} onChange={(e) => setAccesorios(e.target.value)} />
              </>
            )}

            <label htmlFor="descripcion-personaliza">
              {idProducto ? "¿Qué te gustaría cambiar o añadir del producto? Lo haremos realidad." : "Describe como deseas tu historia, te ayudaremos a hacerla realidad."}:
            </label>
            <textarea id="descripcion-personaliza" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="5" required></textarea>

            <button type="submit" className="button">Enviar pedido</button>
          </form>
        )}
      </main>
    </div>
  );
}

export default Personaliza;