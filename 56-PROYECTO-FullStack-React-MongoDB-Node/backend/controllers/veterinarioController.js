// Imports
import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOlvidePassword from "../helpers/emailOlvidePassword.js";

const registrar = async (request, response) => {
    const { email, nombre } = request.body;

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

        // Enviar el email
        emailRegistro({
            email,
            nombre,
            token: veterinarioGuardado.token
        });

        response.json(veterinarioGuardado);
    } catch (error) {
        response.json(error);
    }
};

const perfil = (request, response) => {
    const { veterinario } = request;
    response.json(veterinario);
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
        await confirmarUsuario.save();

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
        response.json({
            _id: existeUsuario._id,
            nombre: existeUsuario.nombre,
            email: existeUsuario.email,
            token: generarJWT(existeUsuario._id),
            telefono: existeUsuario.telefono,
            web: existeUsuario.web
        });
    } else {
        const error = new Error('Datos de autenticacion incorrectos');
        return response.status(500).json({ message: error.message });
    }
};

const olvidePassword = async (request, response) => {
    const { email, nombre } = request.body;

    const existeVeterinario = await Veterinario.findOne({ email });
    
    if (!existeVeterinario) {
        const error = new Error('El usuario no existe');
        return response.status(400).json({ message: error.message });
    }

    try {
        existeVeterinario.token = generarId();
        await existeVeterinario.save();

        // Enviar Email con instrucciones
        emailOlvidePassword({
            email,
            nombre,
            token: existeVeterinario.token
        });

        response.status(200).json({ message: 'Hemos enviado un email con las instrucciones' });
    } catch (error) {
        response.json(error);
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
        response.json(error);
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