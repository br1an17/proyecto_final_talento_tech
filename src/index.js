import express from 'express';
import path from 'path';
import  url  from 'url';
// const PORT = 3000; 

// const app = express();
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public'));

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
// });
// This is a simple Node.js script that prints "Hello, World!" to the console.
// It serves as a basic example of how to run a Node.js application.    
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/auth', authRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});