import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style.css';
import '../css/paginas/admin.css';

function AdminLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    
    fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Credenciales incorrectas");
        }
      })
      .then(datos => {
        localStorage.setItem("adminToken", datos.token);
        navigate('/admin/panel');
      })
      
      .catch(() => {
        setError("Usuario o contraseña incorrectos.");
      });
  };

  return (
    <div className="admin-login-contenedor">
      <div className="admin-login-caja">
        <h1>Panel de Administración</h1>
        <p>Ingresa tus credenciales para gestionar la tienda.</p>

        <form onSubmit={manejarLogin} className="admin-form">
          <label htmlFor="admin-user">Usuario:</label>
          <input 
            id="admin-user"
            type="text" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            required 
          />

          <label htmlFor="admin-pass">Contraseña:</label>
          <input 
            id="admin-pass"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          {error && <span className="error-mensaje">{error}</span>}

          <div className="content-btn_adminlogin ">
            <button type="submit" className="button btn-admin">Entrar</button>
            <Link to="/" className="button btn-admin">← Volver a la tienda</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;