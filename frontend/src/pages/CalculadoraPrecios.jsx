import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import '../css/paginas/admin.css'; 
import '../css/paginas/calculadora.css';

function CalculadoraPrecios() {
  // --- ESTADOS GENERALES ---
  const [nombreProd, setNombreProd] = useState("");
  const [cantidadProducir, setCantidadProducir] = useState(1);

  // --- 2. MATERIALES ---
  const [materiales, setMateriales] = useState([
    { nombre: "", costoCompra: 0, cantComprada: 1, cantUsada: 0, unidad: "gramos" }
  ]);
  const agregarMaterial = () => setMateriales([...materiales, { nombre: "", costoCompra: 0, cantComprada: 1, cantUsada: 0, unidad: "gramos" }]);
  const eliminarMaterial = (i) => setMateriales(materiales.filter((_, idx) => idx !== i));
  const actualizarMaterial = (i, campo, valor) => {
    const nuevos = [...materiales];
    nuevos[i][campo] = (campo === "nombre" || campo === "unidad") ? valor : Number(valor);
    setMateriales(nuevos);
  };
  const totalMateriales = materiales.reduce((total, mat) => {
    if (mat.cantComprada <= 0) return total;
    return total + ((mat.costoCompra / mat.cantComprada) * mat.cantUsada);
  }, 0);

  // --- 3. HERRAMIENTAS ---
  const [herramientas, setHerramientas] = useState([
    { nombre: "", precioCompra: 0, vidaUtil: 1, usarManual: false, costoManual: 0 }
  ]);
  const agregarHerramienta = () => setHerramientas([...herramientas, { nombre: "", precioCompra: 0, vidaUtil: 1, usarManual: false, costoManual: 0 }]);
  const eliminarHerramienta = (i) => setHerramientas(herramientas.filter((_, idx) => idx !== i));
  const actualizarHerramienta = (i, campo, valor) => {
    const nuevas = [...herramientas];
    nuevas[i][campo] = (campo === "nombre" || campo === "usarManual") ? valor : Number(valor);
    setHerramientas(nuevas);
  };
  const totalHerramientas = herramientas.reduce((total, herr) => {
    if (herr.usarManual) return total + herr.costoManual;
    if (herr.vidaUtil <= 0) return total;
    return total + (herr.precioCompra / herr.vidaUtil);
  }, 0);

  // --- 4. MANO DE OBRA ---
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [valorHora, setValorHora] = useState(8000);
  const totalManoObra = ((horas + (minutos / 60)) * valorHora);

  // --- 5. SERVICIOS ---
  const [porcentajeServicios, setPorcentajeServicios] = useState(0.30); // 30%
  const totalServicios = totalMateriales * porcentajeServicios;

  // --- 6. EMPAQUE ---
  const [empaques, setEmpaques] = useState([{ nombre: "", costo: 0, cantidad: 1 }]);
  const agregarEmpaque = () => setEmpaques([...empaques, { nombre: "", costo: 0, cantidad: 1 }]);
  const eliminarEmpaque = (i) => setEmpaques(empaques.filter((_, idx) => idx !== i));
  const actualizarEmpaque = (i, campo, valor) => {
    const nuevos = [...empaques];
    nuevos[i][campo] = (campo === "nombre") ? valor : Number(valor);
    setEmpaques(nuevos);
  };
  const totalEmpaque = empaques.reduce((total, emp) => total + (emp.costo * emp.cantidad), 0);

  // --- 7. ENVÍOS ---
  const [costoEnvio, setCostoEnvio] = useState(0);
  const [envioAsumido, setEnvioAsumido] = useState(false);
  const totalEnvio = envioAsumido ? costoEnvio : 0;

  // --- 8. GASTOS ADICIONALES ---
  const [extras, setExtras] = useState([{ nombre: "", valor: 0, tipo: "unidad" }]);
  const agregarExtra = () => setExtras([...extras, { nombre: "", valor: 0, tipo: "unidad" }]);
  const eliminarExtra = (i) => setExtras(extras.filter((_, idx) => idx !== i));
  const actualizarExtra = (i, campo, valor) => {
    const nuevos = [...extras];
    nuevos[i][campo] = (campo === "nombre" || campo === "tipo") ? valor : Number(valor);
    setExtras(nuevos);
  };
  const totalExtras = extras.reduce((total, ext) => {
    if (ext.tipo === "pedido") return total + (ext.valor / cantidadProducir);
    return total + ext.valor;
  }, 0);

  // --- 9. COSTO TOTAL ---
  const costoTotalUnidad = totalMateriales + totalHerramientas + totalManoObra + totalServicios + totalEmpaque + totalEnvio + totalExtras;
  const costoTotalPedido = costoTotalUnidad * cantidadProducir;

  // --- 10. MARGEN Y RESULTADOS ---
  const [tipoMargen, setTipoMargen] = useState("markup"); // "markup" o "margen"
  const [porcentajeGanancia, setPorcentajeGanancia] = useState(0.40); // 40%

  let precioSugerido = 0;
  if (tipoMargen === "markup") {
    precioSugerido = costoTotalUnidad * (1 + porcentajeGanancia);
  } else {
    // Si el margen es 40%, dividimos por (1 - 0.40) = 0.60
    precioSugerido = costoTotalUnidad / (1 - porcentajeGanancia);
  }
  const gananciaUnidad = precioSugerido - costoTotalUnidad;

  // Redondeo
  const [redondearA, setRedondearA] = useState(0);
  let precioFinal = precioSugerido;
  if (redondearA > 0) {
    precioFinal = Math.ceil(precioSugerido / redondearA) * redondearA;
  }
  const gananciaFinal = precioFinal - costoTotalUnidad;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Calculadora de Costos y Precios</h1>
        <Link to="/admin/panel" className="button btn-admin-header">Volver al Admin</Link>
      </header>

      <main className="admin-contenido calc-grid">
        
        <div className="calc-columna">
          {/* SECCIÓN 1: GENERAL */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>1. Información General</h2>
            <div className="admin-form">
              <label>Nombre del producto:</label>
              <input type="text" value={nombreProd} onChange={(e) => setNombreProd(e.target.value)} placeholder="Ej: Gato" />
              <label>Cantidad de unidades a fabricar:</label>
              <input type="number" min="1" value={cantidadProducir} onChange={(e) => setCantidadProducir(Number(e.target.value))} />
            </div>
          </div>

          {/* SECCIÓN 2: MATERIALES */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>2. Materiales e Insumos</h2>
            {materiales.map((mat, i) => (
              <div key={i} className="calculadora-material-row">
                <div className="calculadora-input-group input-grande">
                  <label className="calculadora-label">Material</label>
                  <input type="text" value={mat.nombre} onChange={(e) => actualizarMaterial(i, "nombre", e.target.value)} className="calculadora-input" placeholder="Lana" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Costo ($)</label>
                  <input type="number" value={mat.costoCompra} onChange={(e) => actualizarMaterial(i, "costoCompra", e.target.value)} className="calculadora-input" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Cant. Comprada</label>
                  <input type="number" value={mat.cantComprada} onChange={(e) => actualizarMaterial(i, "cantComprada", e.target.value)} className="calculadora-input" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Unidad</label>
                  <input type="text" value={mat.unidad} onChange={(e) => actualizarMaterial(i, "unidad", e.target.value)} className="calculadora-input" placeholder="gramos, unds..." />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Cant. Usada</label>
                  <input type="number" value={mat.cantUsada} onChange={(e) => actualizarMaterial(i, "cantUsada", e.target.value)} className="calculadora-input" />
                </div>
                <button type="button" className="btn-admin rechazar btn-eliminar-material" onClick={() => eliminarMaterial(i)}>X</button>
              </div>
            ))}
            <button type="button" className="button" onClick={agregarMaterial}>+ Añadir material</button>
            <div className="calculadora-total-container">
              <h3>Total Materiales: <span className="calculadora-total-valor">${totalMateriales.toLocaleString("es-CO")}</span></h3>
            </div>
          </div>

          {/* SECCIÓN 3: HERRAMIENTAS */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>3. Herramientas (Desgaste)</h2>
            {herramientas.map((herr, i) => (
              <div key={i} className="calculadora-material-row">
                <div className="calculadora-input-group input-grande">
                  <label className="calculadora-label">Herramienta</label>
                  <input type="text" value={herr.nombre} onChange={(e) => actualizarHerramienta(i, "nombre", e.target.value)} className="calculadora-input" placeholder="Tijeras" />
                </div>
                {!herr.usarManual ? (
                  <>
                    <div className="calculadora-input-group">
                      <label className="calculadora-label">Precio Compra ($)</label>
                      <input type="number" value={herr.precioCompra} onChange={(e) => actualizarHerramienta(i, "precioCompra", e.target.value)} className="calculadora-input" />
                    </div>
                    <div className="calculadora-input-group">
                      <label className="calculadora-label">Vida Útil (usos)</label>
                      <input type="number" value={herr.vidaUtil} onChange={(e) => actualizarHerramienta(i, "vidaUtil", e.target.value)} className="calculadora-input" />
                    </div>
                  </>
                ) : (
                  <div className="calculadora-input-group">
                    <label className="calculadora-label">Costo Manual ($)</label>
                    <input type="number" value={herr.costoManual} onChange={(e) => actualizarHerramienta(i, "costoManual", e.target.value)} className="calculadora-input" />
                  </div>
                )}
                <div className="calculadora-input-group" style={{ flex: 0.5 }}>
                  <label className="calculadora-label">¿Manual?</label>
                  <input type="checkbox" checked={herr.usarManual} onChange={(e) => actualizarHerramienta(i, "usarManual", e.target.checked)} style={{ width: "20px", height: "20px" }} />
                </div>
                <button type="button" className="btn-admin rechazar btn-eliminar-material" onClick={() => eliminarHerramienta(i)}>X</button>
              </div>
            ))}
            <button type="button" className="button" onClick={agregarHerramienta}>+ Añadir herramienta</button>
            <div className="calculadora-total-container">
              <h3>Total Herramientas: <span className="calculadora-total-valor">${totalHerramientas.toLocaleString("es-CO")}</span></h3>
            </div>
          </div>
        </div>

        <div className="calc-columna">
          {/* SECCIÓN 4: MANO DE OBRA */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>4. Mano de Obra</h2>
            <div className="calculadora-material-row">
              <div className="calculadora-input-group">
                <label className="calculadora-label">Horas</label>
                <input type="number" min="0" value={horas} onChange={(e) => setHoras(Number(e.target.value))} className="calculadora-input" />
              </div>
              <div className="calculadora-input-group">
                <label className="calculadora-label">Minutos</label>
                <input type="number" min="0" max="59" value={minutos} onChange={(e) => setMinutos(Number(e.target.value))} className="calculadora-input" />
              </div>
              <div className="calculadora-input-group input-grande">
                <label className="calculadora-label">Valor Hora ($)</label>
                <input type="number" value={valorHora} onChange={(e) => setValorHora(Number(e.target.value))} className="calculadora-input" />
              </div>
            </div>
            <div className="calculadora-total-container">
              <h3>Total Mano de Obra: <span className="calculadora-total-valor">${totalManoObra.toLocaleString("es-CO")}</span></h3>
            </div>
          </div>

          {/* SECCIÓN 5: SERVICIOS */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>5. Servicios y Gastos Indirectos</h2>
            <p className="calculadora-descripcion">Porcentaje sobre el total de materiales.</p>
            <div className="calculadora-material-row">
              <div className="calculadora-input-group input-grande">
                <label className="calculadora-label">Porcentaje (Ej: 0.30 para 30%)</label>
                <input type="number" step="0.05" value={porcentajeServicios} onChange={(e) => setPorcentajeServicios(Number(e.target.value))} className="calculadora-input" />
              </div>
            </div>
            <div className="calculadora-total-container">
              <h3>Total Servicios: <span className="calculadora-total-valor">${totalServicios.toLocaleString("es-CO")}</span></h3>
            </div>
          </div>

          {/* SECCIÓN 6: EMPAQUE */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>6. Empaque y Presentación</h2>
            {empaques.map((emp, i) => (
              <div key={i} className="calculadora-material-row">
                <div className="calculadora-input-group input-grande">
                  <label className="calculadora-label">Empaque</label>
                  <input type="text" value={emp.nombre} onChange={(e) => actualizarEmpaque(i, "nombre", e.target.value)} className="calculadora-input" placeholder="Bolsa" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Costo Unit. ($)</label>
                  <input type="number" value={emp.costo} onChange={(e) => actualizarEmpaque(i, "costo", e.target.value)} className="calculadora-input" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Cantidad</label>
                  <input type="number" value={emp.cantidad} onChange={(e) => actualizarEmpaque(i, "cantidad", e.target.value)} className="calculadora-input" />
                </div>
                <button type="button" className="btn-admin rechazar btn-eliminar-material" onClick={() => eliminarEmpaque(i)}>X</button>
              </div>
            ))}
            <button type="button" className="button" onClick={agregarEmpaque}>+ Añadir empaque</button>
            <div className="calculadora-total-container">
              <h3>Total Empaque: <span className="calculadora-total-valor">${totalEmpaque.toLocaleString("es-CO")}</span></h3>
            </div>
          </div>

          {/* SECCIÓN 7: ENVÍOS Y 8: EXTRAS */}
          <div className="tabla-contenedor seccion-calculadora">
            <h2>7. Logística y 8. Gastos Adicionales</h2>
            <div className="calculadora-material-row">
              <div className="calculadora-input-group input-grande">
                <label className="calculadora-label">Costo de Envío ($)</label>
                <input type="number" value={costoEnvio} onChange={(e) => setCostoEnvio(Number(e.target.value))} className="calculadora-input" />
              </div>
              <div className="calculadora-input-group" style={{ flex: 0.5 }}>
                <label className="calculadora-label">¿Lo asume la empresa?</label>
                <input type="checkbox" checked={envioAsumido} onChange={(e) => setEnvioAsumido(e.target.checked)} style={{ width: "20px", height: "20px" }} />
              </div>
            </div>
            
            <hr style={{ margin: "20px 0", borderColor: "var(--rosa-suave)" }} />
            
            {extras.map((ext, i) => (
              <div key={i} className="calculadora-material-row">
                <div className="calculadora-input-group input-grande">
                  <label className="calculadora-label">Gasto</label>
                  <input type="text" value={ext.nombre} onChange={(e) => actualizarExtra(i, "nombre", e.target.value)} className="calculadora-input" placeholder="Comisión" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">Valor ($)</label>
                  <input type="number" value={ext.valor} onChange={(e) => actualizarExtra(i, "valor", e.target.value)} className="calculadora-input" />
                </div>
                <div className="calculadora-input-group">
                  <label className="calculadora-label">¿Aplica a?</label>
                  <select value={ext.tipo} onChange={(e) => actualizarExtra(i, "tipo", e.target.value)} className="calculadora-input">
                    <option value="unidad">Por unidad</option>
                    <option value="pedido">Por pedido total</option>
                  </select>
                </div>
                <button type="button" className="btn-admin rechazar btn-eliminar-material" onClick={() => eliminarExtra(i)}>X</button>
              </div>
            ))}
            <button type="button" className="button" onClick={agregarExtra}>+ Añadir gasto</button>
          </div>
        </div>

        {/* SECCIÓN 9 y 10: RESUMEN Y RESULTADOS */}
        <div className="calc-resultados-full">
          <div className="tabla-contenedor">
            <h2>Resumen y Precio de Venta</h2>
            
            <div className="resumen-grid">
              <div className="resumen-costos">
                <h3>Costos de Fabricación</h3>
                <p>Materiales: <span>${totalMateriales.toLocaleString("es-CO")}</span></p>
                <p>Herramientas: <span>${totalHerramientas.toLocaleString("es-CO")}</span></p>
                <p>Mano de Obra: <span>${totalManoObra.toLocaleString("es-CO")}</span></p>
                <p>Servicios: <span>${totalServicios.toLocaleString("es-CO")}</span></p>
                <p>Empaque: <span>${totalEmpaque.toLocaleString("es-CO")}</span></p>
                <p>Envío (Empresa): <span>${totalEnvio.toLocaleString("es-CO")}</span></p>
                <p>Extras: <span>${totalExtras.toLocaleString("es-CO")}</span></p>
                <hr />
                <h3>Costo Total por Unidad: <span>${costoTotalUnidad.toLocaleString("es-CO")}</span></h3>
                {cantidadProducir > 1 && (
                  <h4>Costo Total del Pedido: <span>${costoTotalPedido.toLocaleString("es-CO")}</span></h4>
                )}
              </div>

              <div className="resumen-ganancia">
                <h3>Margen de Ganancia</h3>
                <div className="admin-form">
                  <label>Modalidad:</label>
                  <select value={tipoMargen} onChange={(e) => setTipoMargen(e.target.value)}>
                    <option value="markup">Markup (Porcentaje sobre el costo)</option>
                    <option value="margen">Margen (Porcentaje sobre el precio final)</option>
                  </select>
                  <label>Porcentaje (Ej: 0.40 para 40%)</label>
                  <input type="number" step="0.05" value={porcentajeGanancia} onChange={(e) => setPorcentajeGanancia(Number(e.target.value))} />
                
                
                    <label>Redondear a (Ej: 100, 500, 1000)</label>
                    <input type="number" min="0" value={redondearA} onChange={(e) => setRedondearA(Number(e.target.value))} placeholder="0 = sin redondeo" />

                 <p>Ganancia por unidad: <span>${gananciaUnidad.toLocaleString("es-CO")}</span></p>

                </div>
                
                
                

                <div className="resultados-finales">

                    
                 
                  <p className="precio-sugerido">Precio Sugerido: <br/><span>${precioSugerido.toLocaleString("es-CO")}</span></p>

                  <p className="precio-final">Precio Final a Cobrar: <br/><span>${precioFinal.toLocaleString("es-CO")}</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

export default CalculadoraPrecios;