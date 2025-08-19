import Veterinario from "../models/Veterinario.js";

const registrar = async (request, response) => {
    const { email } = request.body;

    // Prevenir usuario duplicados
    const existeUsuario = await Veterinario.findOne({ email });

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return response.status(400).json({ message: error.message });
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
    response.json({ message: 'Mostrando perfil' });
};

const confirmar = async (request, response) => {
    const { token } = request.params;

    const confirmarUsuario = await Veterinario.findOne({ token });

    if (!confirmarUsuario) {
        const error = new Error('Token no válido'); 
        return response.status(404).json({ message: error.message });
    }

    try {
        confirmarUsuario.token = null;
        confirmarUsuario.confirmado = true;
        confirmarUsuario.save();

        response.json({ message: 'Usuario confirmado correctamente'});
    } catch (error) {
        response.json(error);
    }

};

const autenticar = async (request, response) => {
    const { email, password } = request.body;

    // Comprobar si el usuario existe
    const existeUsuario = await Veterinario.findOne({ email });

    if (!existeUsuario) {
        const error = new Error('El usuario no existe');
        return response.status(404).json({ message: error.message });
    }

    // Comprobar si el usuario esta confirmado
    if (!existeUsuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido confirmada');
        return response.status(403).json({ message: error.message });
    }

    // Revisar password
    if (await existeUsuario.comprobarPassword(password)) {
        console.log('Password correcto');
    } else {
        const error = new Error('Datos de autenticacion incorrectos');
        return response.status(500).json({ message: error.message });
    }


}

export {
    registrar,
    perfil,
    confirmar,
    autenticar
}