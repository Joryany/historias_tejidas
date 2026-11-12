import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/paginas/footer-pagina.css'; 


function Terminos() {
  return (
    <div>
      <Header />
      
      <main className="pagina-legal">
        <div className="legal-contenedor">
          <h1>Términos y Condiciones</h1>
          <p className="fecha-actualizacion">Última actualización: Noviembre 2026</p>

          <section>
            <h2>1. Información General</h2>
            <p>Historias Tejidas es un emprendimiento de tejidos artesanales ubicado en Barranquilla, Colombia. Por el momento, no contamos con tienda física; todas nuestras ventas se gestionan a través de nuestra página web y WhatsApp.</p>
          </section>

          <section>
            <h2>2. Sobre los Pedidos</h2>
            <p>Todos nuestros productos son elaborados a mano y bajo pedido. Los amigurumis de catálogo tienen un tiempo de elaboración aproximado de 3 días hábiles. Los pedidos personalizados pueden tardar de 1 a 2 semanas, dependiendo de la complejidad del diseño.</p>
          </section>

          <section>
            <h2>3. Pagos y Anticipos</h2>
            <p>Aceptamos pagos por PSE, transferencias Bancolombia, Nequi y efectivo. Los pedidos personalizados requieren un anticipo del 50% para iniciar la producción. El saldo restante se cancela contra entrega. Todos nuestros precios incluyen IVA.</p>
          </section>

          <section>
            <h2>4. Envíos y Entregas</h2>
            <p>Realizamos entregas locales en Barranquilla y envíos a nivel nacional por transportadoras. El costo del envío se calcula según la ubicación del cliente y se confirma al momento de la cotización.</p>
          </section>

          <section>
            <h2>5. Cambios, Devoluciones y Garantías</h2>
            <p>Los productos personalizados <strong>no tienen derecho a reembolso</strong>, ya que son creados a medida. Los productos del catálogo están sujetos a nuestra política de devolución. Si tu pedido llega dañado o incompleto, debes reportarlo en las primeras 24 horas con evidencia fotográfica para gestionar la solución.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Terminos;