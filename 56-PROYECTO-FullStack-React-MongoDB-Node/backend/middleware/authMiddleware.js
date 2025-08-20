const checkAuth = (request, response, next) => {
    if (request.headers.authorization && 
        request.headers.authorization.startsWith('Bearer')) {
        next();
    }

    const error = new Error('Token no válido o inexistente');
    response.status(403).json({ message: error.message });
};

export default checkAuth;