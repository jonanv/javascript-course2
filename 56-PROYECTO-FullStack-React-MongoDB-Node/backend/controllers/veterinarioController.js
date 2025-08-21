import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";

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
    const { veterinario } = request;
    response.json({ perfil: veterinario });
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
        // Autenticar el usuario
        response.json({ token: generarJWT(existeUsuario._id) });
    } else {
        const error = new Error('Datos de autenticacion incorrectos');
        return response.status(500).json({ message: error.message });
    }
};

const olvidePassword = async (request, response) => {
    const { email } = request.body;

    const existeUsuario = await Veterinario.findOne({ email });
    
    if (!existeUsuario) {
        const error = new Error('El usuario no existe');
        return response.status(400).json({ message: error.message });
    }

    try {
        existeUsuario.token = generarId();
        await existeUsuario.save();
        response.status(200).json({ message: 'Hemos enviado un email con las instrucciones' });
    } catch (error) {
        console.error(error);
    }
    
    response.status(200).json({ message: 'Olvide contraseña...' });
};

const comprobarToken = async (request, response) => {
    const { token } = request.params;

    const tokenValido = await Veterinario.findOne({ token });

    if (tokenValido) {
        // El token es válido y el usuario existe
        response.status(200).json({ message: 'Token válido y el usuario existe' });
    } else {
        const error = new Error('Token inválido');
        return response.status(400).json({ message: error.message });
    }
};

const nuevoPassword = async (request, response) => {
    const { token } = request.params; // Parametro de la URL
    const { password } = request.body; // Parametro enviado por formulario

    const veterinario = await Veterinario.findOne({ token });

    if (!veterinario) {
        const error = new Error('Hubo un error');
        return response.status(400).json({ message: error.message });
    }

    try {
        veterinario.password = password;
        veterinario.token = null;
        await veterinario.save();
        return response.status(200).json({ message: 'Password modificado exitosamente' });
    } catch (error) {
        console.error(error);
    }
};

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword, 
    comprobarToken,
    nuevoPassword
}