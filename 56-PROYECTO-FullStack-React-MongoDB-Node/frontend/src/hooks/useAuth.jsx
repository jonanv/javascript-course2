import { useContext } from "react";

// Imports
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;