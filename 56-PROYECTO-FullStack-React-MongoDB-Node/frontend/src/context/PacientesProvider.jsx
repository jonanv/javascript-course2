import { createContext, useState, useEffect } from "react";

// Imports
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});
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
        if (!paciente.id) {
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
        } else {

        }
    }

    const editarPaciente = async (paciente) => {
        setPaciente(paciente);
        // try {
        //     const { data } = await clienteAxios.get(`pacientes/${ id }`, cargarConfig());
        //     setPaciente(data);
        // } catch (error) {
        //     console.error(error.response.data.message);
        //     setPaciente({});
        // } finally {
        //     setTimeout(() => {
        //         setLoading(false);
        //     }, 3000);
        // }
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
                loading,
                editarPaciente,
                paciente
            }}>
            { children }
        </PacientesContext.Provider>
    );
}

export {
    PacientesProvider
};

export default PacientesContext;