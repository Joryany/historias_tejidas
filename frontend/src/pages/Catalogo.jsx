import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TarjetaProducto from '../components/TarjetaProducto';
import '../style.css';
import '../css/paginas/catalogo.css';
import AlertaTailwind from '../components/AlertaTailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';



function mezclarAleatoriamente(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Catalogo() {
  const [cargando, setCargando] = useState(true); 
  const [productos, setProductos] = useState([]);  
  const [error, setError] = useState("");
  

  const [searchParams] = useSearchParams();
  const categoriaURL = searchParams.get("categoria") || "todos";

 
  const [categoriaActual, setCategoriaActual] = useState(categoriaURL);
  
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("defecto");
  const [paginaActual, setPaginaActual] = useState(1);
  const PRODUCTOS_POR_PAGINA = 9; 


 
    useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/productos`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar");
        return res.json();
      })
      .then((datos) => {
        const datosMezclados = mezclarAleatoriamente(datos);
        setProductos(datosMezclados);
        setCargando(false);
      })     
      .catch((errorCargar) => {
        console.error("Error al cargar los productos", errorCargar);
        setCargando(false);
        setError("No pudimos conectar con la tienda. Revisa tu internet.");
    
      });
  }, []);

   

  if (cargando) {
    return <div className='mensaje_carga'> 
    <h2>Cargando los productos...</h2>
    <h3>Agradecemos su paciencia.</h3>
    </div>

    
  }

   let productosAMostrar = productos;

  if (categoriaActual !== "todos") {
    productosAMostrar = productos.filter(function(producto) {
      return producto.categoria === categoriaActual;
    });
  }

  if (busqueda !== "") {
    productosAMostrar = productosAMostrar.filter(function(producto) {
        return producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    });
  }

  if (orden === "precio-menor") {
    productosAMostrar = [...productosAMostrar].sort((a, b) => a.precio - b.precio);
    } else if (orden === "precio-mayor") {
        productosAMostrar = [...productosAMostrar].sort((a, b) => b.precio - a.precio);
    } else if (orden === "alfabetico") {
        productosAMostrar = [...productosAMostrar].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

      
    const indiceUltimoProducto = paginaActual * PRODUCTOS_POR_PAGINA;
    const indicePrimerProducto = indiceUltimoProducto - PRODUCTOS_POR_PAGINA;
  
  
    const productosDeEstaPagina = productosAMostrar.slice(indicePrimerProducto, indiceUltimoProducto);

  
    const totalPaginas = Math.ceil(productosAMostrar.length / PRODUCTOS_POR_PAGINA);


  return (
    <div>
     
      <Header />
        
       <main>
        {error && <AlertaTailwind mensaje={error} />}

        <section className="hero">
            <img src="/flores-de-cerezo.png"
                alt="En un fondo rosado claro en la zona derecha hay flores de cerezo repartidas por dicha zona."/>
            <div className="hero-overlay"></div>
            <div className="container">
                <h2>Nuestras creaciones</h2>
                <h1>Encuentra algo que cuente tu historia</h1>
                <p>Explora nuestro trabajo y encuentra ese detalle que estabas buscando.</p>
            </div>
        </section>

        <div className='catalogo'>
            <section className="catalogo__buscadores">
              <input className="buscador"
                type="text" 
                placeholder="Buscar amigurumi..." 
                value={busqueda}
                onChange={(e) => { 
                  setBusqueda(e.target.value); 
                  setPaginaActual(1); 
                }}
                
              />
              <select className="ordenador" value={orden} onChange={(e) => {
                setOrden(e.target.value);  
                setPaginaActual(1)}}>
                <option value="defecto">Ordenar por defecto</option>
                <option value="precio-menor">Precio: Menor a Mayor</option>
                <option value="precio-mayor">Precio: Mayor a Menor</option>
                <option value="alfabetico">Nombre: A - Z</option>
              </select>

               <div className="nav__catalogo">
              <button 
                className={categoriaActual === "todos" ? "boton-categoria nav__a--activo" : "boton-categoria"} 
                onClick={() => {
                  setCategoriaActual("todos");  
                  setPaginaActual(1)}}>
                Todos
              </button>
              
              <button 
                className={categoriaActual === "animales" ? "boton-categoria nav__a--activo" : "boton-categoria"} 
                onClick={() => {
                  setCategoriaActual("animales"); 
                  setPaginaActual(1)}}>
                Animales
              </button>

              <button 
                className={categoriaActual === "personajes" ? "boton-categoria nav__a--activo" : "boton-categoria"} 
                onClick={() =>  {
                  setCategoriaActual("personajes");  
                  setPaginaActual(1)}}>
                Personajes
              </button>

              <button 
                className={categoriaActual === "parejas" ? "boton-categoria nav__a--activo" : "boton-categoria"} 
                onClick={() => {
                  setCategoriaActual("parejas");
                setPaginaActual(1)}}>
                Parejas
              </button>

              <button 
                className={categoriaActual === "regalo" ? "boton-categoria nav__a--activo" : "boton-categoria"} 
                onClick={() => {
                  setCategoriaActual("regalo");  
                  setPaginaActual(1)}}>
                Regalos
              </button>
            </div>

            </section>

           

          <section className='tarjeta-container'>
            {productosDeEstaPagina.map(function(producto) {
            return (
              <TarjetaProducto 
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre} 
                precio={producto.precio} 
                imagen={producto.imagen}
                alt={producto.alt}
              />
            );  
            })}
          </section>

           {totalPaginas > 1 && (
            <section className="paginacion">
              <button 
                className="btn-pagina" 
                disabled={paginaActual === 1}
                onClick={() => setPaginaActual(paginaActual - 1)}
              >
                ← Anterior
              </button>

             
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numeroPagina) => (
                <button
                  key={numeroPagina}
                  className={`btn-pagina ${paginaActual === numeroPagina ? "activo" : ""}`}
                  onClick={() => setPaginaActual(numeroPagina)}
                >
                  {numeroPagina}
                </button>
              ))}

              <button 
                className="btn-pagina" 
                disabled={paginaActual === totalPaginas}
                onClick={() => setPaginaActual(paginaActual + 1)}
              >
                Siguiente →
              </button>
            </section>
          )}
        </div>
      </main>

      <Footer />
        
    </div>
  )
}


export default Catalogo;