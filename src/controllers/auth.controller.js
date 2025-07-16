import { login } from '../services/auth.services.js';

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await login(email, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

