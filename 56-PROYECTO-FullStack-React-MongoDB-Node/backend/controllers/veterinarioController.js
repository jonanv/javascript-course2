const registrar = (require, response) => {
    response.json({url: 'Desde API/VETERINARIOS'});
};

const perfil = (require, response) => {
    response.json({url: 'Desde API/VETERINARIOS/PERFIl'});
};

export {
    registrar,
    perfil
}