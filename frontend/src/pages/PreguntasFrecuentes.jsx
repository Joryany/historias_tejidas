import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/paginas/footer-pagina.css';

function PreguntasFrecuentes() {
  return (
    <div>
      <Header />
      
      <main className="pagina-legal">
        <div className="legal-contenedor">
          <h1>Preguntas Frecuentes</h1>
          <p className="fecha-actualizacion">Todo lo que necesitas saber antes de comprar</p>

         <div className="faq-list">
       
            <details>
              <summary>🔒 ¿Es seguro el método de pago? ¿Hay protección al comprador?</summary>
              <p>¡Sí! Nuestros pagos se gestionan a través de canales oficiales (Nequi, transferencias Bancolombia y PSE). No solicitamos datos de tarjetas de crédito en la página, ni pagos por enlaces externos sospechosos. Siempre verificamos tu identidad y te enviamos un comprobante de compra antes de iniciar la producción. Si tienes dudas, puedes contactarnos directamente por nuestro WhatsApp oficial antes de transferir.</p>
            </details>

         
            <details>
              <summary>⭐ ¿El producto tiene garantía? ¿De qué materiales está hecho?</summary>
              <p>Todos nuestros productos están hechos 100% a mano con hilos de algodón y acrílicos de alta calidad, además de relleno siliconado. Al ser artesanales, garantizamos su durabilidad si se cuidan adecuadamente (evitar lavados en máquina o exposición extrema al sol). Ofrecemos garantía de fabricación: si un amigurumi presenta un defecto en sus costuras o materiales al recibirlo, lo reparamos o reemplazamos sin costo.</p>
            </details>

          
            <details>
              <summary>🚚 ¿Cuánto tarda el envío, cuánto cuesta y se puede rastrear?</summary>
              <p>Para Barranquilla, la entrega es local y tarda de 1 a 3 días tras finalizar el tejido. Para el resto de Colombia, enviamos por transportadoras aliadas (toma de 2 a 5 días adicionales). El costo del envío depende de tu ciudad y se calcula al cotizar. <strong>Sí, todos los envíos nacionales cuentan con número de guía para rastreo</strong> el cual te compartimos por WhatsApp.</p>
            </details>

          
            <details>
              <summary>🔄 ¿Qué pasa si el artículo llega defectuoso o no coincide con lo pedido?</summary>
              <p>Como personalizamos cada detalle contigo (colores, tamaños, personajes) por WhatsApp, el producto siempre coincidirá con lo acordado. Si el artículo llega defectuoso o presenta daños por el transporte, tienes <strong>24 horas</strong> para reportarlo con evidencia fotográfica. En esos casos, asumimos el costo y gestionamos la reparación o el reembolso correspondiente. <em>(Los productos personalizados no tienen devolución por cambio de opinión, solo por garantía).</em></p>
            </details>

          
            <details>
              <summary>📸 ¿El producto es idéntico a la fotografía? ¿Qué pasa si algo sale mal tras la compra?</summary>
              <p>Al ser tejidos a mano, pueden existir <strong>mínimas variaciones</strong> en las puntadas respecto a la foto (eso es lo que hace único a un producto artesanal). Sin embargo, garantizamos que los colores y el diseño general serán exactamente los que acordamos. Si algo sale mal o tienes algún inconveniente post-venta, nuestro WhatsApp de atención al cliente estará abierto de Lunes a Sábado de 8 a.m. a 6 p.m. para resolver tu caso de inmediato. ¡Tu satisfacción es nuestra prioridad!</p>
            </details>

            <details>
              <summary>🕒 ¿Cuánto tardan en tejer mi pedido?</summary>
              <p>Los productos de catálogo tardan aproximadamente 3 días hábiles. Los personalizados toman entre 1 y 2 semanas, dependiendo de la complejidad del diseño.</p>
            </details>

            <details>
              <summary>💸 ¿Puedo pagar contra entrega?</summary>
              <p>Para pedidos de catálogo en Barranquilla, el pago puede ser contra entrega. Para pedidos personalizados o envíos nacionales, se requiere el anticipo del 50% para comprar los materiales e iniciar el tejido.</p>
            </details>
         </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PreguntasFrecuentes;