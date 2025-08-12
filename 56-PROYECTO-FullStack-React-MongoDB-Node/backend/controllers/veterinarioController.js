const registrar = (require, response) => {
    response.send('Desde API/VETERINARIOS');
};

const perfil = (require, response) => {
    response.send('Desde API/VETERINARIOS/PERFIl');
};

export {
    registrar,
    perfil
}