// Imports
import Paciente from "../models/Paciente.js";

const agregarPaciente = async (request, response) => {
    try {
        // Guardar un nuevo paciente
        const paciente = new Paciente(request.body);
        paciente.veterinario = request.veterinario._id;
        const pacienteGuardado = await paciente.save();

        response.status(201).json(pacienteGuardado);
    } catch (error) {
        response.json(error);
    }
};

const obtenerPacientes = (request, response) => {
    return response.status(200).json({ message: 'Lista de pacientes' });
};

export {
    agregarPaciente,
    obtenerPacientes
}