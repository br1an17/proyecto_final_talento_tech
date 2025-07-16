# proyecto final talento tech

Este es el proyecto final de Node.JS

* Descripción:

API REST que permite crear, leer, actualizar y eliminar productos usando Firebase Firestore como base de datos, protegiendo rutas con autenticación JWT y construida con Express en estructura escalable.

* Tecnologías

Node.js + Express
Firebase Firestore
JWT (jsonwebtoken)
Dotenv
CORS
Body-parser

1. Clonar el repositorio:

git clone <https://github.com/br1an17/proyecto_final_talento_tech.git>
cd api-products-firebase

2. Instalar dependencias:

npm install

3. Configurar .env:

PORT=3000
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
JWT_SECRET=miclavesecreta

4. Ejecutar el servidor:

npm run start

* Endpoints principales

Auth
POST /auth/login
Envía { "email": "admin@admin.com", "password": "admin123" } para recibir un JWT.

* Products

(Protegidos con JWT, debes enviarlo en Authorization: Bearer <token>)

GET /api/products → Listar todos los productos

GET /api/products/:id → Obtener producto por ID

POST /api/products/create → Crear producto (name, description, price, stock)

DELETE /api/products/:id → Eliminar producto

* Seguridad

Las rutas de productos están protegidas con JWT.

Solo podrás acceder si realizás login correctamente.

JWT expira en 1 hora por seguridad.

* Testing

Usar Postman o Thunder Client:

- Login y obtener JWT.
- Probar rutas de productos agregando el JWT en headers.

* Nota final

Este proyecto te permite aprender a:

- Crear APIs REST con Node.js y Express.
- Usar Firestore como base de datos en la nube.
- Proteger rutas con JWT.
- Trabajar con estructura escalable profesional.
