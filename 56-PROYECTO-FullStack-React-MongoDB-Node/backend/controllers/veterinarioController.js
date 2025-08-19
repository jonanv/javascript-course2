import Veterinario from "../models/Veterinario.js";

const registrar = async (request, response) => {
    const { email } = request.body;

    // Prevenir usuario duplicados
    const existeUsuario = await Veterinario.findOne({ email });

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return response.status(400).json({ msg: error.message });
    }

    try {
        // Guardar un nuevo Veterinario
        const veterinario = new Veterinario(request.body);
        const veterinarioGuardado = await veterinario.save();

        response.json(veterinarioGuardado);
    } catch (error) {
        response.json(error);
    }
};

const perfil = (request, response) => {
    response.json({ msg: 'Mostrando perfil' });
};

export {
    registrar,
    perfil
}