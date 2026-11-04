
import { useState, useEffect } from 'react';

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [editando, setEditando] = useState(false);

    const formularioInicial = {
    id: "",
    nombre: "",
    categoria: "animales",
    precio: 0,
    imagen: "",
    alt: "",
    historia: "",
    materiales: "",
    etiqueta: "",
    opciones: [] 
  };

  const [form, setForm] = useState(formularioInicial);

  useEffect(() => {
    cargarProductos();
  }, []);

    const cargarProductos = () => {
    fetch(`${import.meta.env.VITE_API_URL}/productos`)
      .then(res => res.json())
      .then(datos => {
        
        if (Array.isArray(datos)) {
          setProductos(datos);
        } else {
          setProductos([]);
        }
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
        setProductos([]);
      });
  };
  // Detectar cambios en los campos
  const manejarCambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setForm(formularioInicial);
    setEditando(false);
  };

  // Crear o actualizar producto
  const guardarProducto = (e) => {
    e.preventDefault();

    const url = editando
      ? `${import.meta.env.VITE_API_URL}/productos/${form.id}`
      : `${import.meta.env.VITE_API_URL}/productos`;

    const metodo = editando ? "PUT" : "POST";

    fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("adminToken")
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("No se pudo guardar el producto");
        }

        alert(editando ? "Producto actualizado" : "Producto creado");

        limpiarFormulario();
        cargarProductos();
      })
      .catch(error => {
        console.error(error);
        alert("Ocurrió un error al guardar el producto");
      });
  };

  // Seleccionar producto para editar
  const editarProducto = (prod) => {
    setForm({
      ...formularioInicial,
      ...prod
    });

    setEditando(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
            fetch(`${import.meta.env.VITE_API_URL}/productos/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": localStorage.getItem("adminToken")
        }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("No se pudo eliminar el producto");
          }

          cargarProductos();
        })
        .catch(error => {
          console.error(error);
          alert("Ocurrió un error al eliminar el producto");
        });
    }
  };

    // --- FUNCIONES PARA LAS OPCIONES ---
  const agregarGrupo = () => {
    const nuevoGrupo = { nombre: "Nuevo Grupo", items: [{ nombre: "Opción 1", value: "opcion-1", multiplicador: 1 }] };
    setForm({ ...form, opciones: [...form.opciones, nuevoGrupo] });
  };

  const eliminarGrupo = (indexGrupo) => {
    const nuevosGrupos = form.opciones.filter((_, i) => i !== indexGrupo);
    setForm({ ...form, opciones: nuevosGrupos });
  };

  const actualizarGrupo = (indexGrupo, valor) => {
    const nuevosGrupos = [...form.opciones];
    nuevosGrupos[indexGrupo].nombre = valor;
    setForm({ ...form, opciones: nuevosGrupos });
  };

  const agregarItem = (indexGrupo) => {
    const nuevosGrupos = [...form.opciones];
    nuevosGrupos[indexGrupo].items.push({ nombre: "Nueva Opción", value: "nueva-opcion", multiplicador: 1 });
    setForm({ ...form, opciones: nuevosGrupos });
  };

  const eliminarItem = (indexGrupo, indexItem) => {
    const nuevosGrupos = [...form.opciones];
    nuevosGrupos[indexGrupo].items = nuevosGrupos[indexGrupo].items.filter((_, i) => i !== indexItem);
    setForm({ ...form, opciones: nuevosGrupos });
  };

  const actualizarItem = (indexGrupo, indexItem, campo, valor) => {
    const nuevosGrupos = [...form.opciones];
    nuevosGrupos[indexGrupo].items[indexItem][campo] = valor;
    setForm({ ...form, opciones: nuevosGrupos });
  };

  return (
    <div className="admin-productos">

      {/* FORMULARIO */}
      <h2>
        {editando ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <form onSubmit={guardarProducto} className="admin-form">

        <label htmlFor="id">ID (ej: nuevo-gato):</label>
        <input
          id="id"
          name="id"
          value={form.id}
          onChange={manejarCambio}
          disabled={editando}
          required
        />

        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          name="categoria"
          value={form.categoria}
          onChange={manejarCambio}
        >
          <option value="animales">Animales</option>
          <option value="personajes">Personajes</option>
          <option value="parejas">Parejas</option>
          <option value="regalo">Regalos</option>
        </select>

        <label htmlFor="precio">Precio:</label>
        <input
          id="precio"
          type="number"
          name="precio"
          min="0"
          value={form.precio}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="imagen">Ruta de la imagen:</label>
        <input
          id="imagen"
          name="imagen"
          value={form.imagen}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="alt">Texto alternativo (Alt):</label>
        <input
          id="alt"
          name="alt"
          value={form.alt}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="historia">Historia:</label>
        <textarea
          id="historia"
          name="historia"
          value={form.historia}
          onChange={manejarCambio}
        />

        <label htmlFor="materiales">Materiales:</label>
        <input
          id="materiales"
          name="materiales"
          value={form.materiales}
          onChange={manejarCambio}
        />

        <label htmlFor="etiqueta">Etiqueta:</label>
        <input
          id="etiqueta"
          name="etiqueta"
          value={form.etiqueta}
          onChange={manejarCambio}
        />

                {/* CONSTRUCTOR DE OPCIONES */}
        <div className="admin-opciones-container">
          <h3>Opciones de Personalización (Tamaños, Colores, etc.)</h3>
          <button type="button" className="button" onClick={agregarGrupo}>
            + Añadir Grupo de Opciones
          </button>

          {form.opciones.map((grupo, indexGrupo) => (
            <div key={indexGrupo} className="admin-grupo-card">
              <div className="admin-grupo-header">
                <input 
                  type="text" 
                  value={grupo.nombre} 
                  onChange={(e) => actualizarGrupo(indexGrupo, e.target.value)} 
                  placeholder="Nombre del grupo (Ej: Tamaño)"
                  required
                />
                <button type="button" className="btn-admin rechazar" onClick={() => eliminarGrupo(indexGrupo)}>X</button>
              </div>

              {grupo.items.map((item, indexItem) => (
                <div key={indexItem} className="admin-item-row">
                  <input 
                    type="text" 
                    value={item.nombre} 
                    onChange={(e) => actualizarItem(indexGrupo, indexItem, "nombre", e.target.value)} 
                    placeholder="Nombre (Ej: Grande)"
                    required
                  />
                  <input 
                    type="text" 
                    value={item.value} 
                    onChange={(e) => actualizarItem(indexGrupo, indexItem, "value", e.target.value)} 
                    placeholder="Valor (Ej: grande)"
                    required
                  />
                  <input 
                    type="number" 
                    step="0.1"
                    value={item.multiplicador || ""} 
                    onChange={(e) => actualizarItem(indexGrupo, indexItem, "multiplicador", Number(e.target.value))} 
                    placeholder="Multiplicador (Ej: 1.5)"
                  />
                  <button type="button" className="btn-admin rechazar" onClick={() => eliminarItem(indexGrupo, indexItem)}>Quitar</button>
                </div>
              ))}

              <button type="button" className="button" onClick={() => agregarItem(indexGrupo)} style={{ marginTop: "10px" }}>
                + Añadir Opción a este grupo
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="button btn-finalizar">
          {editando ? "Guardar Cambios" : "Crear Producto"}
        </button>

        {editando && (
          <button
            type="button"
            className="btn-admin rechazar"
            onClick={limpiarFormulario}
          >
            Cancelar edición
          </button>
        )}

      </form>

      {/* CUADRÍCULA DE PRODUCTOS */}
      <h2>Lista de Productos ({productos.length})</h2>

      <div className="productos-admin-grid">

        {productos.length > 0 ? (
          productos.map(p => (

            <article className="producto-admin-card" key={p.id}>

              <img
                src={p.imagen ? `/${p.imagen.replace("assets/img/", "")}` : "/logo-sin-texto.png"}
                alt={p.alt || p.nombre}
                loading="lazy"
                />

              <div className="producto-admin-info">

                <h3>{p.nombre}</h3>

                <p className="producto-admin-precio">
                  ${Number(p.precio).toLocaleString("es-CO")}
                </p>

                <span className="producto-admin-categoria">
                  {p.categoria}
                </span>

                <div className="producto-admin-acciones">

                  <button
                    type="button"
                    className="btn-admin aprobar"
                    onClick={() => editarProducto(p)}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="btn-admin rechazar"
                    onClick={() => eliminarProducto(p.id)}
                  >
                    Borrar
                  </button>

                </div>

              </div>

            </article>

          ))
        ) : (

          <p className="productos-admin-vacio">
            Todavía no hay productos registrados.
          </p>

        )}

      </div>

    </div>
  );
}

export default AdminProductos;
