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

const confirmar = async (request, response) => {
    const { token } = request.params;

    const confirmarUsuario = await Veterinario.findOne({ token });

    if (!confirmarUsuario) {
        const error = new Error('Token no válido'); 
        return response.status(404).json({ msg: error.message });
    }

    try {
        confirmarUsuario.token = null;
        confirmarUsuario.confirmado = true;
        confirmarUsuario.save();

        response.json({ msg: 'Usuario confirmado correctamente'});
    } catch (error) {
        response.json(error);
    }

};

const autenticar = (request, response) => {
    response.json({ msg: 'Autenticando' });
}

export {
    registrar,
    perfil,
    confirmar,
    autenticar
}