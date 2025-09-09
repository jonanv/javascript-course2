import { createContext, useState, useEffect } from "react";

// Imports
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <PacientesContext.Provider
            value={{
                pacientes
            }}>
            { children }
        </PacientesContext.Provider>
    );
}

export {
    PacientesProvider
};

export default PacientesContext;