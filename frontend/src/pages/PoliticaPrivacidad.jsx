import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/paginas/footer-pagina.css';

function PoliticaPrivacidad() {
  return (
    <div>
      <Header />
      
      <main className="pagina-legal">
        <div className="legal-contenedor">
          <h1>Política de Privacidad</h1>
          <p className="fecha-actualizacion">Última actualización: Noviembre 2026</p>

          <section>
            <h2>1. Datos que Recopilamos</h2>
            <p>Cuando realizas un pedido o una solicitud de personalización, recopilamos: tu nombre, número de WhatsApp, dirección de entrega y fecha deseada. Estos datos son estrictamente necesarios para procesar y entregar tu pedido.</p>
          </section>

          <section>
            <h2>2. Uso de tu Información</h2>
            <p>Tu número de WhatsApp será utilizado únicamente para contactarte y coordinar los detalles de tu pedido (diseño, pago y entrega). No enviamos publicidad no solicitada a través de este medio.</p>
          </section>

          <section>
            <h2>3. Protección de Datos</h2>
            <p>No compartimos, vendemos ni transferimos tus datos personales a terceros. Tu información se almacena en una base de datos segura y solo el administrador de Historias Tejidas tiene acceso a ella.</p>
          </section>

          <section>
            <h2>4. Uso de Cookies</h2>
            <p>Nuestra página utiliza el almacenamiento local (localStorage) de tu navegador para guardar tu carrito de compras y tus datos de contacto recientes. Esto con el fin de hacer tu experiencia más rápida en futuras visitas. No utilizamos cookies de rastreo publicitario.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PoliticaPrivacidad;