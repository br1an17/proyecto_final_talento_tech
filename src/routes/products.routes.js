import express from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authenticateToken, getAllProducts);
router.get('/:id', authenticateToken, getProductById);
router.post('/create', authenticateToken, createProduct);
router.delete('/:id', authenticateToken, deleteProduct);

export default router;
