
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../style.css';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  // Cerrar el menú con Escape y bloquear el scroll de fondo
  useEffect(() => {
    if (!menuAbierto) return;

    const manejarTecla = (event) => {
      if (event.key === 'Escape') {
        cerrarMenu();
      }
    };

    document.addEventListener('keydown', manejarTecla);

    const scrollAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', manejarTecla);
      document.body.style.overflow = scrollAnterior;
    };
  }, [menuAbierto]);

  return (
    <header className="encabezado-principal">

      {/* Logo */}
      <Link to="/" className="header-logo" onClick={cerrarMenu}>
        <img
          src="/logo-sin-texto.png"
          alt="Logo de Historias Tejidas"
        />
      </Link>

      {/* Botón para abrir el menú en móviles */}
      <button
        type="button"
        className="navegador_menu-toggle"
        onClick={() => setMenuAbierto(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuAbierto}
        aria-controls="navegador-principal"
      >
        ☰
      </button>

      {/* Fondo oscuro del modal */}
      {menuAbierto && (
        <div
          className="navegador_modal-fondo"
          onClick={cerrarMenu}
          aria-hidden="true"
        />
      )}

      {/* Navegación principal */}
      <nav
        id="navegador-principal"
        className={`navegador_principal ${
          menuAbierto ? 'navegador_principal--abierto' : ''
        }`}
        aria-label="Navegación principal"
      >

        {/* Botón para cerrar el modal */}
        <button
          type="button"
          className="navegador_cerrar"
          onClick={cerrarMenu}
          aria-label="Cerrar menú"
        >
          ×
        </button>

        <NavLink
          to="/"
          onClick={cerrarMenu}
          className={({ isActive }) =>
            isActive ? "nav__a--activo" : ""
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/catalogo"
          onClick={cerrarMenu}
          className={({ isActive }) =>
            isActive ? "nav__a--activo" : ""
          }
        >
          Catálogo
        </NavLink>

        <NavLink
          to="/personaliza"
          onClick={cerrarMenu}
          className={({ isActive }) =>
            isActive ? "nav__a--activo" : ""
          }
        >
          Personaliza
        </NavLink>

        <NavLink
          to="/carrito"
          id="navegador_carrito-icono"
          onClick={cerrarMenu}
          className={({ isActive }) =>
            isActive ? "nav__a--activo" : ""
          }
        >
          Carrito
        </NavLink>

        <NavLink
          to="/favoritos"
          onClick={cerrarMenu}
          aria-label="Favoritos"
          className={({ isActive }) =>
            isActive ? "nav__a--activo" : ""
          }
        >
          ♥
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;
