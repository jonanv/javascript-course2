import { useContext } from "react";

// Imports
import PacientesContext from "../context/PacientesProvider";

const usePacientes = () => {
    return useContext(PacientesContext);
}

export default usePacientes;