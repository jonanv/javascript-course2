import { Outlet, Navigate } from "react-router-dom";

// Imports
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
            <Header />
                <main className="container mx-auto mt-10">
                    {auth?._id 
                        ? <Outlet />
                        : <Navigate to="/" />
                    }
                </main>
            <Footer />
        </>
    );
}

export default RutaProtegida;