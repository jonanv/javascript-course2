const registrar = (require, response) => {
    response.json({ msg: 'Registrando usuario...' });
};

const perfil = (require, response) => {
    response.json({ msg: 'Mostrando perfil' });
};

export {
    registrar,
    perfil
}