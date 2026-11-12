import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import '../css/componentes/chatbot.css';

function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [pantalla, setPantalla] = useState("inicio");

  const reiniciar = () => setPantalla("inicio");

  return (
    <div className="chatbot-contenedor">
      <button className="chatbot-btn-flotante" onClick={() => setAbierto(!abierto)}>
        {abierto ? "✕" : "💬"}
      </button>

      {abierto && (
        <div className="chatbot-ventana">
          <div className="chatbot-header">
            <img src="/mimi.png" alt="Mimí" className="mimi-foto" />
            <div>
              <h3>Mimí</h3>
              <p>Asistente de Historias Tejidas</p>
            </div>
          </div>

          <div className="chatbot-mensajes">

            <div className="chat-transicion">
            
            {/* ================= INICIO ================= */}
            {pantalla === "inicio" && (
              <div className="chat-mensaje bot">
                <p>«¡Hola! Soy Mimí. 💗 ¿Buscas un detalle tejido, un regalo especial o algo bonito para ti? ¡Te ayudo a encontrar lo que buscas!»</p>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>Buscar un detalle</button>
                <button className="chat-btn" onClick={() => setPantalla("faq_menu")}>Tengo una duda</button>
                <a href="https://wa.me/573247745820" target="_blank" rel="noreferrer" className="chat-btn btn-wa">Hablar con un Asesor</a>
              </div>
            )}

            {/* ================= OPCIONES (El nuevo menú) ================= */}
            {pantalla === "opciones" && (
              <div className="chat-mensaje bot">
                <p>¿Qué estás buscando hoy?</p>
                <button className="chat-btn" onClick={() => setPantalla("reco_amigurumis")}>Amigurumis</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_flores")}>Flores y detalles</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_accesorios")}>Accesorios</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_regalo")}>Un regalo especial</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_personalizado")}>Algo personalizado</button>
                <button className="chat-btn" onClick={reiniciar}>← Volver</button>
              </div>
            )}

            {/* ================= RUTA: AMIGURUMIS ================= */}
            {pantalla === "reco_amigurumis" && (
              <div className="chat-mensaje bot">
                <p>«¡Tenemos muchas opciones! ¿Qué tipo de amigurumi te gustaría?»</p>
                <Link to="/catalogo?categoria=animales" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Animalitos tiernos</Link>
                <Link to="/catalogo?categoria=personajes" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Anime, películas o videojuegos</Link>
                <Link to="/catalogo?categoria=parejas" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Parejas y conjuntos</Link>
                <Link to="/personaliza" className="chat-btn" onClick={() => setAbierto(false)}>Tengo una idea propia</Link>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>← Volver</button>
              </div>
            )}

            {/* ================= RUTA: FLORES Y DETALLES ================= */}
            {pantalla === "reco_flores" && (
              <div className="chat-mensaje bot">
                <p>«¡Un detalle tejido puede durar mucho más que un momento! ¿Qué tienes en mente?»</p>
                <Link to="/catalogo?categoria=regalo" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Flores tejidas y detalles</Link>
                <Link to="/personaliza" className="chat-btn" onClick={() => setAbierto(false)}>Combinar varios detalles</Link>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>← Volver</button>
              </div>
            )}

            {/* ================= RUTA: ACCESORIOS ================= */}
            {pantalla === "reco_accesorios" && (
              <div className="chat-mensaje bot">
                <p>«¡También tenemos creaciones tejidas que puedes llevar contigo! ¿Qué buscas?»</p>
                <Link to="/catalogo?categoria=regalo" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Bolsos y accesorios</Link>
                <Link to="/personaliza" className="chat-btn" onClick={() => setAbierto(false)}>Algo personalizado</Link>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>← Volver</button>
              </div>
            )}

            {/* ================= RUTA: REGALO ESPECIAL ================= */}
            {pantalla === "reco_regalo" && (
              <div className="chat-mensaje bot">
                <p>«¡Vamos a encontrar algo especial! ¿Para quién es?»</p>
                <button className="chat-btn" onClick={() => setPantalla("reco_regalo_2")}>Mi pareja</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_regalo_2")}>Un familiar o amigo</button>
                <button className="chat-btn" onClick={() => setPantalla("reco_regalo_2")}>Para mí</button>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>← Volver</button>
              </div>
            )}
            
            {pantalla === "reco_regalo_2" && (
              <div className="chat-mensaje bot">
                <p>«¿Qué tipo de detalle crees que le gustaría?»</p>
                <Link to="/catalogo?categoria=animales" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Algo tierno (Amigurumi)</Link>
                <Link to="/catalogo?categoria=regalo" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Flores o accesorios</Link>
                <Link to="/personaliza" className="chat-btn" onClick={() => setAbierto(false)}>Algo 100% personalizado</Link>
                <button className="chat-btn" onClick={() => setPantalla("reco_regalo")}>← Volver</button>
              </div>
            )}

            {/* ================= RUTA: PERSONALIZADO ================= */}
            {pantalla === "reco_personalizado" && (
              <div className="chat-mensaje bot">
                <p>«¡Podemos convertir tu idea en una creación tejida! ¿Cómo te gustaría empezar?»</p>
                <Link to="/personaliza" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Modificar un producto del catálogo</Link>
                <Link to="/personaliza" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Tengo una idea desde cero</Link>
                <Link to="/personaliza" className="chat-btn btn-primario" onClick={() => setAbierto(false)}>Tengo una imagen de referencia</Link>
                <button className="chat-btn" onClick={() => setPantalla("opciones")}>← Volver</button>
              </div>
            )}

            {/* ================= FAQ MENU ================= */}
            {pantalla === "faq_menu" && (
              <div className="chat-mensaje bot">
                <p>¿Sobre qué tema tienes dudas?</p>
                <button className="chat-btn" onClick={() => setPantalla("faq_info")}>Información de la tienda</button>
                <button className="chat-btn" onClick={() => setPantalla("faq_pagos")}>Pagos y envíos</button>
                <button className="chat-btn" onClick={() => setPantalla("faq_garantias")}>Cambios y garantías</button>
                <button className="chat-btn" onClick={reiniciar}>Volver al inicio</button>
              </div>
            )}

            {pantalla === "faq_info" && (
              <div className="chat-mensaje bot">
                <p><strong>Horarios:</strong> Lunes a sábado, 8:00 a.m. a 6:00 p.m.</p>
                <p><strong>Ubicación:</strong> Barranquilla, Colombia. (Por ahora sin tienda física).</p>
                <button className="chat-btn" onClick={() => setPantalla("faq_menu")}>← Volver a temas</button>
              </div>
            )}

            {pantalla === "faq_pagos" && (
              <div className="chat-mensaje bot">
                <p><strong>Medios de pago:</strong> PSE, Bancolombia, Nequi y efectivo.</p>
                <p><strong>Envíos:</strong> Locales en Barranquilla y nacionales a toda Colombia. Te confirmamos el costo al cotizar.</p>
                <button className="chat-btn" onClick={() => setPantalla("faq_menu")}>← Volver a temas</button>
              </div>
            )}

            {pantalla === "faq_garantias" && (
              <div className="chat-mensaje bot">
                <p><strong>Devoluciones:</strong> Personalizados no tienen reembolso. Catálogo sujeto a política.</p>
                <p><strong>Daños:</strong> Repórtanos en las primeras 24 horas con evidencia.</p>
                <button className="chat-btn" onClick={() => setPantalla("faq_menu")}>← Volver a temas</button>
              </div>
            )}

          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Chatbot;