import jwt from 'jsonwebtoken';

export const login = async (email, password) => {
    if (email === 'admin@admin.com' && password === 'admin123') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    } else {
        throw new Error('Credenciales inválidas');
    }
};
