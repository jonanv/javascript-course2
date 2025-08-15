const registrar = (require, response) => {
    console.log(require.body);
    response.json({ msg: 'Registrando usuario...' });
};

const perfil = (require, response) => {
    response.json({ msg: 'Mostrando perfil' });
};

export {
    registrar,
    perfil
}