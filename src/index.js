import express from 'express';
const app = express();
const PORT = 5000; 




app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
// This is a simple Node.js script that prints "Hello, World!" to the console.
// It serves as a basic example of how to run a Node.js application.    