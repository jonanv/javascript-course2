import { Outlet, Navigate } from "react-router-dom";

// Imports
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const RutaProtegida = () => {

    const { auth, loading } = useAuth();
    
    if (loading) {
        return (
            <div className="flex items-center justify-center gap-2">
                <span>Cargando...</span>
                <Loading color={'text-black'} />
            </div>
        );
    }

    return (
        <>
            <h1>Esto es un ruta protegida</h1>
            {auth?._id 
                ? <Outlet />
                : <Navigate to="/" />
            }
            
        </>
    );
}

export default RutaProtegida;