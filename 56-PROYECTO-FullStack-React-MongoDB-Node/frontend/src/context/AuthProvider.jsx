import { useState, useEffect, createContext } from 'react';

// Imports
import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            try {
                const { data } = await clienteAxios.get('/veterinarios/perfil', cargarConfig());
                setAuth(data);
            } catch (error) {
                console.error(error.response.data.message);
                setAuth({});
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        };
        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
    }

    const actualizarPerfil = async (perfil) => {
        const { _id } = perfil;

        try {
            const { data } = await clienteAxios.put(`/veterinarios/perfil/${ _id }`, perfil, cargarConfig());
            setAuth(data);
            return {
                message: 'Almacenado correctamente',
                error: false
            };
        } catch (error) {
            return {
                message: error.response.data.message,
                error: true
            };
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
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
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
                cerrarSesion,
                actualizarPerfil
            }}>
            { children }
        </AuthContext.Provider>
    );
}

export {
    AuthProvider
};

export default AuthContext;