import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';
import '../css/paginas/admin.css';
import AdminProductos from '../components/AdminProductos';

function AdminDashboard() {
  // 1. Ahora tenemos 3 pestañas: pedidos, personalizados e historial
  const [pestana, setPestana] = useState("pedidos");
  const [pedidos, setPedidos] = useState([]);
  const [personalizados, setPersonalizados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate('/admin'); 
      return;
    }

  
  
    const tokenAdmin = localStorage.getItem("adminToken");

  
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/pedidos`, {
        headers: { "Authorization": tokenAdmin }
      }).then(r => r.json()),
      
      fetch(`${import.meta.env.VITE_API_URL}/personalizados`, {
        headers: { "Authorization": tokenAdmin }
      }).then(r => r.json())
    ]).then(([datosPedidos, datosPersonalizados]) => {
      setPedidos(datosPedidos);
      setPersonalizados(datosPersonalizados);
      setCargando(false);
    }).catch(err => {
      console.error(err);
      setCargando(false);
    });
  }, [navigate]);

  const cambiarEstado = (id, nuevoEstado, tipo) => {
    const ruta = tipo === "pedido" ? "pedidos" : "personalizados";
    
        fetch(`${import.meta.env.VITE_API_URL}/${ruta}/${id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("adminToken") // <-- AQUÍ ESTÁ EL BOLSILLO
      },
      body: JSON.stringify({ estado: nuevoEstado })
    }).then(res => {
      if (res.ok) {
        if (tipo === "pedido") {
          setPedidos(pedidos.map(p => p._id === id ? { ...p, estado: nuevoEstado } : p));
        } else {
          setPersonalizados(personalizados.map(p => p._id === id ? { ...p, estado: nuevoEstado } : p));
        }
      }
    });
  };

  const cerrarSesion = () => {
    localStorage.removeItem("adminToken");
    navigate('/admin');
  };

  if (cargando) return <h2 className="admin-cargando">Cargando base de datos...</h2>;

  const pedidosPendientes = pedidos.filter(p => p.estado === "pendiente");
  const pedidosProcesados = pedidos.filter(p => p.estado !== "pendiente");
  
  const personalizadosPendientes = personalizados.filter(p => p.estado === "pendiente");
  const personalizadosProcesados = personalizados.filter(p => p.estado !== "pendiente");

    const historialCombinado = [...pedidosProcesados, ...personalizadosProcesados];
  
  const historialOrdenado = historialCombinado.sort((a, b) => {
   
    const pesoA = a.estado === "aprobado" ? 1 : 2;
    const pesoB = b.estado === "aprobado" ? 1 : 2;
    return pesoA - pesoB; 
  });

  const totalHistorial = pedidosProcesados.length + personalizadosProcesados.length;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Dashboard - Historias Tejidas</h1>
        <div className="admin-header-botones">
          <Link to="/" className="button btn-admin-header">Ir a la Tienda</Link>
          <Link to="/admin/calculadora" className="button btn-admin-header" style={{ backgroundColor: "var(--frambuesa)", color: "white" }}>
          Abrir Calculadora
        </Link>
          <button onClick={cerrarSesion} className="button btn-admin-header">Cerrar Sesión</button>

        </div>
      </header>

      <main className="admin-contenido">
        
      
        <div className="admin-pestanas">
          <button className={pestana === "pedidos" ? "btn-pestana activo" : "btn-pestana"} onClick={() => setPestana("pedidos")}>
            Pedidos Pendientes ({pedidosPendientes.length})
          </button>
          <button className={pestana === "personalizados" ? "btn-pestana activo" : "btn-pestana"} onClick={() => setPestana("personalizados")}>
            Personalizados Pendientes ({personalizadosPendientes.length})
          </button>
          <button className={pestana === "historial" ? "btn-pestana activo" : "btn-pestana"} onClick={() => setPestana("historial")}>
            Historial de Pedidos ({totalHistorial})
          </button>
          <button className={pestana === "productos" ? "btn-pestana activo" : "btn-pestana"} onClick={() => setPestana("productos")}>
            Gestionar Productos
          </button>
        </div>

        {/* PESTAÑA 1: PEDIDOS PENDIENTES */}
        {pestana === "pedidos" && (
          <div className="tabla-contenedor">
            <h2>Pedidos por Aprobar</h2>
            {pedidosPendientes.length === 0 ? <p style={{ textAlign: "center", marginTop: "20px" }}>No hay pedidos pendientes.</p> : (
              <table className="tabla-admin">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Productos</th>
                    <th>Total</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidosPendientes.map((pedido) => (
                    <tr key={pedido._id}>
                      <td>
                        <strong>{pedido.nombre}</strong><br/>
                        <span className="texto-pequeno">{pedido.lugar}</span>
                      </td>
                      <td>{pedido.whatsapp}</td>
                      <td>
                        {pedido.productos.map((prod, i) => (
                          <div key={i} className="lista-productos-admin">
                            • {prod.cantidad}x {prod.nombre}
                          </div>
                        ))}
                      </td>
                      <td>${pedido.total.toLocaleString("es-CO")}</td>
                      <td>
                        <div className="acciones-tabla">
                          <button onClick={() => cambiarEstado(pedido._id, "aprobado", "pedido")} className="btn-admin aprobar">Aprobar</button>
                          <button onClick={() => cambiarEstado(pedido._id, "rechazado", "pedido")} className="btn-admin rechazar">Rechazar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* PESTAÑA 2: PERSONALIZADOS PENDIENTES */}
        {pestana === "personalizados" && (
          <div className="tabla-contenedor">
            <h2>Solicitudes por Aprobar</h2>
            {personalizadosPendientes.length === 0 ? <p style={{ textAlign: "center", marginTop: "20px" }}>No hay solicitudes pendientes.</p> : (
              <table className="tabla-admin">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {personalizadosPendientes.map((pedido) => (
                    <tr key={pedido._id}>
                      <td>
                        <strong>{pedido.nombre}</strong><br/>
                        <span className="texto-pequeno">{pedido.lugar}</span>
                      </td>
                      <td>{pedido.whatsapp}</td>
                      <td>{pedido.descripcion}</td>
                      <td>
                        <div className="acciones-tabla">
                          <button onClick={() => cambiarEstado(pedido._id, "aprobado", "personalizado")} className="btn-admin aprobar">Aprobar</button>
                          <button onClick={() => cambiarEstado(pedido._id, "rechazado", "personalizado")} className="btn-admin rechazar">Rechazar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* PESTAÑA 3: HISTORIAL (Aprobados y Rechazados) */}
        {pestana === "historial" && (
          <div className="tabla-contenedor">
            <h2>Historial de Pedidos Procesados</h2>
            {totalHistorial === 0 ? <p style={{ textAlign: "center", marginTop: "20px" }}>El historial está vacío.</p> : (
              <table className="tabla-admin">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Cliente</th>
                    <th>Estado</th>
                    <th>Contacto</th>
                  </tr>
                </thead>
                <tbody>
                
                 {[...historialOrdenado].map((pedido) => {
                    const esPedido = pedido.productos ? true : false;
                    return (
                      <tr key={pedido._id}>
                        <td>{esPedido ? "Carrito" : "Personalizado"}</td>
                        <td>
                          <strong>{pedido.nombre}</strong><br/>
                          <span className="texto-pequeno">{pedido.lugar}</span>
                        </td>
                        <td>
                          <span className={`estado-badge ${pedido.estado}`}>
                            {pedido.estado}
                          </span>
                        </td>
                        <td>
                          <div className="acciones-tabla">
                            <a 
                              href={`https://wa.me/${pedido.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                                `Buenos días, Sr(a). ${pedido.nombre}, ¡mucho gusto!\nSoy Joryany Hormiga, de Historias Tejidas.\n\nLe escribo para confirmarle que su pedido fue *${pedido.estado.toUpperCase()}*.\n\n¿Me confirma si todo está bien para avanzar?`
                              )}`} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="btn-admin whatsapp"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
        {pestana === "productos" && <AdminProductos />}
      </main>
    </div>
  );
}

export default AdminDashboard;