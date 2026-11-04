import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Inicio from './pages/Inicio'; 
import Catalogo from './pages/Catalogo';
import Personaliza from './pages/Personaliza';
import Carrito from './pages/Carrito';
import ProductoDetalle from './pages/ProductoDetalle';
import Favoritos from './pages/Favoritos';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Chatbot from './components/Chatbot';
import CalculadoraPrecios from './pages/CalculadoraPrecios';

function App() {

   const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <Routes>
      
        <Route path="/" element={<Inicio />} />
        
        <Route path="/catalogo" element={<Catalogo />} />
        
        <Route path="/personaliza/:idProducto?" element={<Personaliza />} />
      
        <Route path="/carrito" element={<Carrito />} />
        
        <Route path="/producto/:id" element={<ProductoDetalle />} />

        <Route path="/favoritos" element={<Favoritos />} />
        
            
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminDashboard />} />

        <Route path="/admin/calculadora" element={<CalculadoraPrecios />} />
        
      </Routes>

      <Chatbot />
  </>
);
    }
    

export default App;
