import Veterinario from "../models/Veterinario.js";

const registrar = async (require, response) => {
    const { nombre, email, password } = require.body;

    try {
        // Guardar un nuevo Veterinario
        const veterinario = new Veterinario(require.body);
        const veterinarioGuardado = await veterinario.save();

        response.json(veterinarioGuardado);
    } catch (error) {
        console.error(error);
    }
};

const perfil = (require, response) => {
    response.json({ msg: 'Mostrando perfil' });
};

export {
    registrar,
    perfil
}