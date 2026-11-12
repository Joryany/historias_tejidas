# ⚙️ Historias Tejidas - Backend API

API REST desarrollada para gestionar el catálogo, los pedidos y las personalizaciones de la tienda virtual **Historias Tejidas**.

## 🚀 Tecnologías utilizadas
*   **Node.js**: Entorno de ejecución.
*   **Express**: Framework para el servidor y las rutas.
*   **MongoDB & Mongoose**: Base de datos NoSQL y modelado de datos.
*   **Dotenv**: Gestión de variables de entorno para proteger credenciales.
*   **CORS**: Control de acceso a la API.

## 🔒 Características de Seguridad
*   **Autenticación de Administrador**: El login valida las credenciales ocultas en variables de entorno.
*   **Rutas Protegidas**: Middleware de seguridad (`verificarToken`) que exige un token de autorización para modificar productos (POST, PUT, DELETE) o ver pedidos de clientes.
*   **Rutas Públicas**: Los clientes pueden ver el catálogo y crear pedidos, pero no pueden ver la lista completa de pedidos de otros ni borrar productos.

## 📦 Estructura del proyecto
*   `/models`: Esquemas de la base de datos (`Producto`, `Pedido`, `PedidoPersonalizado`).
*   `/routes`: Endpoints de la API organizados por categoría.
*   `index.js`: Punto de entrada del servidor, configuración de middlewares y conexión a MongoDB.

## 🛠️ Instalación y uso local

1. Clonar el repositorio.
2. Instalar las dependencias:
   ```bash
   npm install