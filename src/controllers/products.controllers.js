import { getAll, getById, create, remove } from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await getById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener producto' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = await create({ name, description, price, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await remove(req.params.id);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};
