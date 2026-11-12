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
import Terminos from './pages/Terminos';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Contacto from './pages/Contacto';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';

function App() {
  // 1. Inicializamos el estado revisando si ya se mostró antes
  const [mostrarSplash, setMostrarSplash] = useState(() => {
    return !sessionStorage.getItem("splashMostrado");
  });

  useEffect(() => {
    // 2. Si no se debe mostrar, salimos del efecto
    if (!mostrarSplash) return; 

    // 3. Si se muestra, esperamos 3.5s y lo apagamos
    const timer = setTimeout(() => {
      setMostrarSplash(false);
      sessionStorage.setItem("splashMostrado", "true"); 
    }, 3500);
    
    return () => clearTimeout(timer);
  }, [mostrarSplash]);

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
        
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminDashboard />} />
        <Route path="/admin/calculadora" element={<CalculadoraPrecios />} />
      </Routes>

      <Chatbot />
    </>
  );
}
    
export default App;