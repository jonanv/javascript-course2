import { createContext, useState, useEffect } from "react";

// Imports
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const { data } = await clienteAxios.get('/pacientes/', cargarConfig());
                setPacientes(data);
            } catch (error) {
                console.log(error.response.data.message);
                setPacientes([]);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        }
        obtenerPacientes();
    }, []);

    const guardarPaciente = async (paciente) => {
        try {
            const { data } = await clienteAxios.post('/pacientes', paciente, cargarConfig());
            const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data; // Crea un nuevo objeto sin los valores de la izquierda
            setPacientes([pacienteAlmacenado, ...pacientes]);
        } catch (error) {
            console.log(error.response.data.message);
            setPacientes([]);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }

    const editarPaciente = async (paciente) => {
        console.log(paciente);
    }

    const cargarConfig = () => {
        const token = localStorage.getItem('token');
            
        if (!token) {
            setLoading(false);
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ token }`
            }
        }

        return config;
    }

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                loading
            }}>
            { children }
        </PacientesContext.Provider>
    );
}

export {
    PacientesProvider
};

export default PacientesContext;