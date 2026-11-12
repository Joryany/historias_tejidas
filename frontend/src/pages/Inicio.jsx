import '../style.css';
import '../css/paginas/inicio.css';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Inicio() {

  const [modalNosotros, setModalNosotros] = useState(false);

  
const [modalCerrando, setModalCerrando] = useState(false);

const cerrarModalNosotros = () => {
  setModalCerrando(true);
};


  return (
    <div>
      <Header />
        

      <main>
        <div className="hero">
          <div className="hero-overlay"></div>
          <img 
            src="/lanas-tipo-fondo.png" 
            alt="Lanas de varios tonos de rosado alineadas de forma consecutiva con flores alrededor." 
          />
          <div className="container">
            <h1>Historias Tejidas</h1>
            <h2>Donde el hilo se vuelve recuerdo</h2>
            <p>
              Un recuerdo, una persona, un lugar, una mascota, un personaje... <br />
              Elige el cómo llevarlo contigo, para que nunca te falte.
            </p>
            <div className="button-hero">
              <Link to="/catalogo">Explorar catálogo</Link>
              <Link to="/personaliza">Crear mi amigurumi</Link>
            </div>
          </div>
        </div>

        <section className="propuesta-valor">
          <span className="section-label">Nuestra esencia</span>
          <h2>Más que un tejido, una historia</h2>
          <p>En Historias Tejidas creemos que algunos recuerdos merecen convertirse en algo que puedas tocar, abrazar y conservar.</p>

          <div className="tarjeta-container">
            <article className="tarjeta">
              <h3>Un recuerdo</h3>
              <p>Convierte ese momento que te marcó, te enseñó o te inspira en algo tangible que puedas conservar.</p>
            </article>
            <article className="tarjeta">
              <h3>Una persona</h3>
              <p>Lleva contigo a alguien especial a través de una creación hecha especialmente para representar su esencia.</p>
            </article>
            <article className="tarjeta">
              <h3>Algo tuyo</h3>
              <p>Crea un diseño inspirado en aquello que te identifica, te apasiona y representa quién eres.</p>
            </article>
          </div>
        </section>


        <section className="destacados">
          <span>Descubre nuestras creaciones</span>
          <h2>Productos destacados</h2>
          <p>Algunas historias que ya tomaron forma entre hilos, colores y mucho cariño.</p>

          <div className="tarjeta-container">
            <article className="tarjeta">
              <img src="/catálogo/elprincipito.png" alt="Amigurumi del personaje el principito junto al zorro en la luna con una rosa." />
              <div className="producto-info">
                <h3>El Principito-Combo completo</h3>
                <p className="precio">$150.000 COP</p>
                <Link className="button" to="/producto/el-principito">Ver producto</Link>
              </div>
            </article>

            <article className="tarjeta">
              <img src="/catálogo/peery.png" alt="Amigurumi de Perry el Ornitorrinco." />
              <div className="producto-info">
                <h3>Perry el Ornitorrinco</h3>
                <p className="precio">$40.000 COP</p>
                <Link className="button" to="/producto/perry-acostado">Ver producto</Link>
              </div>
            </article>

            <article className="tarjeta">
              <img src="/productos/muñeca.png" alt="Amigurumis de una muñeca que representa a una persona." />
              <div className="producto-info">
                <h3>Esa persona ideal</h3>
                <p className="precio">$100.000 COP</p>
                <Link to="/personaliza" className="button">Personalizar</Link>
              </div>
            </article>
          </div>

          <div className="boton-wrapper">
            <Link className="button" to="/catalogo">Ver todo el catálogo</Link>
          </div>
        </section>

        <section className="categorias">
          <span>Encuentra tu historia</span>
          <h2>Explora por categoría</h2>
          <p>Busca lo que necesitas de forma rápida y sencilla.</p>

          <div className="categorias-grid">
            <Link to="/catalogo" className="categoria">
              <img src="/catálogo/capibara.png" alt="Animales tejidos" />
              <h3>Animales</h3>
            </Link>
            <Link to="/catalogo" className="categoria">
              <img src="/catálogo/cadaver-novia.png" alt="Personajes" />
              <h3>Personajes</h3>
            </Link>
            <Link to="/catalogo" className="categoria">
              <img src="/catálogo/chimuelo-pareja.png" alt="Parejas" />
              <h3>Parejas/Dúos</h3>
            </Link>
            <Link to="/catalogo" className="categoria">
              <img src="/catálogo/flor-rapunzel.png" alt="Regalos y accesorios" />
              <h3>Regalos y accesorios</h3>
            </Link>
            <Link to="/personaliza" className="categoria">
              <img src="/productos/pareja.png" alt="Personalizados" />
              <h3>Personalizados</h3>
            </Link>
          </div>
        </section>
        
        <section className="funciona">
          <span>Tu historia, paso a paso</span>
          <h2>¿Cómo funciona?</h2>
          <div className="pasos">
            <article className="paso">
              <span>01</span>
              <h3>Elige una base</h3>
              <p>Escoge el tipo de amigurumi que más se acerque a lo que quieres crear.</p>
            </article>
            <article className="paso">
              <span>02</span>
              <h3>Personaliza</h3>
              <p>Elige colores, detalles y características para hacerlo único.</p>
            </article>
            <article className="paso">
              <span>03</span>
              <h3>Confirma</h3>
              <p>Revisa tu diseño y confirma los detalles de tu pedido.</p>
            </article>
            <article className="paso">
              <span>04</span>
              <h3>Recibe tu historia tejida</h3>
              <p>Preparamos tu creación y la convertimos en un recuerdo que puedas conservar.</p>
            </article>
          </div>
        </section>

    
        <section className="reseñas">
          <span>Historias que ya fueron tejidas</span>
          <div className="res-contenido">
            <h2>Lo que dicen quienes nos eligieron</h2>
            <div className="ress">
              <article className="res">
                <p>"El resultado quedó precioso y se sintió todavía más especial porque estaba hecho pensando en esa persona".</p>
              </article>
              <article className="res">
                <p>"Me encantó poder elegir los detalles y convertir una idea que tenía en un amigurumi".</p>
              </article>
              <article className="res">
                <p>"Fue un regalo completamente diferente y muy personal".</p>
              </article>
            </div>
            <div className="cont-link-des">
              <Link to="/catalogo" className="button">¿Qué estas esperando?</Link>
            </div>
          </div>
        </section>

        <section className="sobre-nosotros">

            <span>Nuestra historia</span>
            <div className="res-contenido">
              <h2>¿Quienes Somos?</h2>
              <p>Historias Tejidas nació de una idea sencilla: convertir aquello que significa algo para nosotros en algo que podamos conservar.</p>
              <p>Cada creación combina tejido, imaginación y detalles pensados para que cada pieza tenga una historia propia.</p>
              <div className="boton-wrapper">
                <button className="button" onClick={() => setModalNosotros(true)}>
                  Conoce de nosotros
                </button>
              </div>
            </div>
            
        
        </section>

         <section className="personalizacion">
          <span>Hazlo tuyo</span>
          <div className="per-contenido">
            <h2>Tu historia no tiene que parecerse a ninguna otra.</h2>
            <p>Cuéntanos qué quieres representar y crea un amigurumi inspirado en esa persona, mascota, recuerdo o idea.</p>
          </div>
          <div className="boton-wrapper">
            <Link to="/personaliza" className="button">Crear mi amigurumi</Link>
          </div>
        </section>

        
      </main>

      <Footer />
        
      

      
      {modalNosotros && (
        <div
          className={`modal-overlay activo ${
            modalCerrando ? "modal-cerrando" : ""
          }`}
          onClick={cerrarModalNosotros}
        >
          <div
            className="modal-cuadro sobre-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-nosotros"
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={(e) => {
              if (
                e.target === e.currentTarget &&
                e.animationName === "modal-salida"
              ) {
                setModalNosotros(false);
                setModalCerrando(false);
              }
            }}
          >
            <button
              className="modal-cerrar"
              onClick={cerrarModalNosotros}
              aria-label="Cerrar ventana"
            >
              ✕
            </button>

            <h2 id="titulo-nosotros">Nuestra Historia</h2>

            <div className="sobre-modal-contenido">

              <img
                src="/logo-sin-texto.png"
                alt="Logo de Historias Tejidas"
                className="sobre-logo"
              />

              <p className="sobre-introduccion">
                En Historias Tejidas creemos que los pequeños
                detalles pueden guardar grandes historias.
              </p>

              <p>
                Nacimos del deseo de transformar ideas, recuerdos
                y personas especiales en creaciones hechas a mano.
                A través del tejido, damos vida a personajes,
                mascotas y detalles que tienen un significado
                único para quien los recibe.
              </p>

              <p>
                Cada pieza es elaborada con dedicación,
                imaginación y cuidado en cada detalle.
                Nos encanta convertir tus ideas en amigurumis
                únicos, hechos especialmente para ti.
              </p>

              <p className="sobre-despedida">
                Gracias por permitirnos tejer tu historia.
              </p>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Inicio;
