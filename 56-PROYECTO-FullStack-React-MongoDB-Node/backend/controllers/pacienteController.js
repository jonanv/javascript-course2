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

const obtenerPacientes = async (request, response) => {
    try {
        const { veterinario } = request;
        const pacientes = await Paciente.find()
            .where('veterinario')   // Nombre del campo de la tabla
            .equals(veterinario);   // Filtra por el veterinario

        return response.status(200).json(pacientes);
    } catch (error) {
        response.json(error);
    }
};

const obtenerPacientePorId = async (request, response) => {
    const { idPaciente } = request.params;

    const paciente = await Paciente.findById(idPaciente);

    if (!paciente) {
        const error = new Error('Paciente no existe');
        return response.status(404).json({ message: error.message });
    }

    if (paciente.veterinario._id.toString() !== request.veterinario._id.toString()) {
        return response.json({ message: 'Acción no válida' });
    }

    try {
        return response.status(200).json(paciente);
    } catch (error) {
        response.json(error);
    }
};

const actualizarPacientePorId = async (request, response) => {
    const { idPaciente } = request.params;

    const paciente = await Paciente.findById(idPaciente);

    if (!paciente) {
        const error = new Error('Paciente no existe');
        return response.status(404).json({ message: error.message });
    }

    if (paciente.veterinario._id.toString() !== request.veterinario._id.toString()) {
        return response.json({ message: 'Acción no válida' });
    }

    try {
        // Actualizar paciente
        paciente.nombre = request.body.nombre || paciente.nombre;
        paciente.propietario = request.body.propietario || paciente.propietario;
        paciente.email = request.body.email || paciente.email;
        paciente.fecha = request.body.fecha || paciente.fecha;
        paciente.sintomas = request.body.sintomas || paciente.sintomas;

        const pacienteActualizado = await paciente.save();
        return response.status(200).json(pacienteActualizado);
    } catch (error) {
        response.json(error);
    }
};

const eliminarPacientePorId = async (request, response) => {
    const { idPaciente } = request.params;

    const paciente = await Paciente.findById(idPaciente);

    if (!paciente) {
        const error = new Error('Paciente no existe');
        return response.status(404).json({ message: error.message });
    }

    if (paciente.veterinario._id.toString() !== request.veterinario._id.toString()) {
        return response.json({ message: 'Acción no válida' });
    }

    try {
        await paciente.deleteOne();
        return response.status(200).json({ message: 'Paciente eliminado' });
    } catch (error) {
        response.json(error);
    }
};

export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPacientePorId,
    actualizarPacientePorId,
    eliminarPacientePorId
}