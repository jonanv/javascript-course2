const checkAuth = (request, response, next) => {
    console.log('Desde mi middleware');

    next();
};

export default checkAuth;