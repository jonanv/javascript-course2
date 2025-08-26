const agregarPaciente = (request, response) => {
    return response.status(200).json({ message: 'paciente' });
};

const obtenerPacientes = (request, response) => {
    return response.status(200).json({ message: 'Lista de pacientes' });
};

export {
    agregarPaciente,
    obtenerPacientes
}