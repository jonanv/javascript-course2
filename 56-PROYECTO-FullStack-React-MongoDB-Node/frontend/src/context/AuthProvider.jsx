import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
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
                const { data } = await clienteAxios.get('/veterinarios/perfil', config);
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

    return (
        <AuthContext.Provider
            value={{
                auth, 
                setAuth,
                loading,
                cerrarSesion
            }}>
            { children }
        </AuthContext.Provider>
    );
}

export {
    AuthProvider
};

export default AuthContext;