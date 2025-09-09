import { createContext, useState, useEffect } from "react";

// Imports
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerPacientes = async () => {
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

            try {
                const { data } = await clienteAxios.get('/pacientes/', config);
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

        try {
            const { data } = await clienteAxios.post('/pacientes', paciente, config);
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