
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

// import express from "express";
// import userRoutes from "./src/routes/user.routes.js";

// const app = express();
// app.use(express.json());
// app.use("/api/users", userRoutes);
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
// });
