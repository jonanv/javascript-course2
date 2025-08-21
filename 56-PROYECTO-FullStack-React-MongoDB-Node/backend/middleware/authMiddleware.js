import jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";

const checkAuth = async (request, response, next) => {
    let token;

    if (request.headers.authorization && 
        request.headers.authorization.startsWith('Bearer')) {
        try {
            token = request.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Almacenando como si fuera la session con el request
            request.veterinario = await Veterinario.findById(decoded.id).select(
                '-password -token -confirmado'
            );
            return next();
        } catch (error) {
            const customError = new Error('Token no válido');
            response.status(403).json({ message: customError.message });
        }
    }

    if (!token) {
        const error = new Error('Token no válido o inexistente');
        response.status(403).json({ message: error.message });
    }

    next();
};

export default checkAuth;